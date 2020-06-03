import PostPreview from "../components/morePosts";
import Link from "next/link";
import RichText from "prismic-reactjs";
import styled from "styled-components";

const More = styled.div`
  position: fixed;
  right: 0px;
  height: 100%;
  width: 15vw;
  z-index: 1;
  top: 0;
  border-left: 1px white solid;
  padding-left: 2vw;
  text-decoration: none;

`;

const Post = styled.a`
  margin-top: 2vw;
  color: ${({theme}) => theme.light.navText};
  cursor: pointer;
  font-weight: 200;

  &:visited {
    ${"" /* color: ${({theme}) => theme.light.text}; */}
  }
  &:hover {
    font-weight: 1000;
    text-shadow: #ddd 2px 0 1px;
    transition-duration: 0.5s;
    color: ${({theme}) => theme.light.lightRed}
  }
`;

const Title = styled.h2`
  margin-top: 2vw;
  color: ${({ theme }) => theme.light.navText};
`;

const MorePosts = ({ posts }) => {
  return (
    <More>
      <Title>more</Title>
      {posts.map(({ node }) => {
        return (
          <div key={node._meta.uid}>
            <Link as={`/posts/${node._meta.uid}`} href="/posts/[slug]">
              <Post>
                {node.title[0].text}
              </Post>
            </Link>
            <p>{node.date}</p>
          </div> 
        ); 
          
      })}
    </More>
  );
};

export default MorePosts;
