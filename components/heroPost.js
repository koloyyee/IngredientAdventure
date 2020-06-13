import { RichText } from "prismic-reactjs";
import Link from "next/link";
import CoverImage from "./coverImage";
import PostPreview from "../components/morePosts";
import styled from "styled-components";

const LinkTo = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.light.lightRed};
  cursor: pointer;

  font-weight: 200;
  &:visited {
    ${"" /* color: ${({theme}) => theme.light.text}; */}
  }
  &:hover {
    font-weight: 1000;
    text-shadow: #ddd 2px 0 1px;
    transition-duration: 0.5s;
    color: ${({ theme }) => theme.light.mutedRed};
  }
`;

const Post = styled.p`
  color: ${({ theme }) => theme.light.navText};
  max-width: 50vw;
  margin: 5vw;
  width: 50%;
  line-height: 2;
  text-indent: 1em;
  text-align: justify;
`;

const HeroPost = ({ title, author, content, slug, date, coverImage }) => {
  return (
    <Post>
      <div>
        <CoverImage
          title={RichText.asText(title)}
          slug={slug}
          url={coverImage.url}
        />
      </div>
      <h4>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <LinkTo>
            <RichText render={title} />
          </LinkTo>
        </Link>
      </h4>
      <RichText render={content} />
    </Post>
  );
};

export default HeroPost;
