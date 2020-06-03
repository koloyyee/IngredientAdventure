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

const Excerpt = styled.p`
    color:${({theme}) => theme.light.navText};
    max-width: 50vw;
`;

const HeroPost = ({ title, author, excerpt, slug, date, coverImage }) => {
  return (
    <section>
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
            <Excerpt>{excerpt}</Excerpt>
            </LinkTo>
          </Link>
        </h4>
    </section>
  );
};

export default HeroPost;
