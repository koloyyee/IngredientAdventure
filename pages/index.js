import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import { getAllPostsForHome } from "../lib/api";
import React, { createContext } from "react";

import HeroPost from "../components/heroPost";
import SiteHeader from "../components/site-header";
import SideNav from "../components/navbar";
import MorePosts from '../components/morePosts';

import {PostContext} from '../components/hooks/postContext'

// const Wrapper = styled.div `
//   margin: 0;
//   padding: 0;
//   background-color: ${({theme}) => theme.light.body}
// `

const Top = styled.div`
  display: flex;
  min-height: 55vw;
  justify-content: space-between;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    135deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(127, 127, 128, 0.6) 40%,
    rgba(255, 255, 255, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;

const Mid = styled.div`
  background: rgb(255, 255, 255);
`;

const LowerMid = styled.div`
  width: 100%;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(127, 127, 128, 0.5) 80%,
    rgba(62, 62, 62, 1) 100%
  );
`;

const fadeIn = keyframes`
    from{ opacity: 0}
    to{opacity: 1}
`;

const Img = styled.img`
  position: relative;
  max-height: 20vw;
  max-width: 20vw;
  min-height: 150px;
  min-width: 150px;
  border-radius: 50%;
  border: 0.5em white solid;
  animation: ${fadeIn} 3s ease-in;
  margin: 10vw;
`;

const Container = styled.div`
  backgroundcolor: ${({ theme }) => theme.light.text};
`;



const App = ({ preview, allPosts }) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const heroPost = allPosts[0].node;
  const morePosts = allPosts.slice(1);

  return (
    <PostContext.Provider value = {heroPost}>
      <SiteHeader />
      <SideNav />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          slug={heroPost._meta.uid}
          date={heroPost.date}
          coverImage={heroPost.coverimage}
          author={heroPost.author}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MorePosts posts ={morePosts} />}
      
    </PostContext.Provider>
  );
};

export const getStaticProps = async ({
  preview = false,
  previewData = null,
}) => {
  const allPosts = await getAllPostsForHome(previewData);
  return {
    props: { preview, allPosts },
  };
};

export default App;
