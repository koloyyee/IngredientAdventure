import { getPostAndMore, getAllPostsWithSlug } from "../../lib/api";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import SideNav from "../../components/navbar";
import CoverImage from "../../components/coverImage";
import Link from "next/link";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

const IndividualPost = styled.div`
  width: 50%;
  line-height: 2;
  text-indent: 1em;
  text-align: justify;
`;

const Post = ({ post, morePost, preview }) => {
  const router = useRouter();
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <SideNav />
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <IndividualPost>
          <RichText render={post?.title} />
          <RichText render={post?.content} />
          <CoverImage
            title={RichText.asText(post?.title)}
            slug={post?._meta.uid}
            url={post?.coverimage.url}
          />
          <div>
            <Link as={`/`} href={"/"}>
              <a>home</a>
            </Link>
          </div>
        </IndividualPost>
      )}
    </>
  );
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: true,
  };
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMore(params.slug, previewData);
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePost: data?.morePost ?? [],
    },
  };
};

export default Post;
