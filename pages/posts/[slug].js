import { getPostAndMore, getAllPostsWithSlug } from "../../lib/api";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import SideNav from "../../components/navbar";
import CoverImage from "../../components/coverImage";

const Post = ({ post, morePost, preview }) => {
  return (
    <>
      <SideNav />
      <div>
        <h1>{post.title[0].text}</h1>
        <RichText render={post.content} />
        <CoverImage
          title={RichText.asText(post.title)}
          slug={post._meta.uid}
          url={post.coverimage.url}
        />
        <div>
          <Link as={`/`} href={"/"}>
            <a>home</a>
          </Link>
        </div>
      </div>
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
  console.log(data.post);
  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePost: data?.morePost ?? [],
    },
  };
};

export default Post;
