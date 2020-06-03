import styled from "styled-components";
import Link from "next/link";

const Image = styled.img`
  width: 50vw;
  transition-duration: 0.5s;
  border-radius: 1vw;

  &:hover {
    box-shadow: 0 10px 11px rgba(33, 33, 33, 0.2);
    transition-duration: 1s;
  }
`;

const CoverImage = ({ title, slug, url }) => {
  const image = <Image src={url} alt={title + " image."} />;
  return (
    <>
      {slug ? ( 
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default CoverImage;
