import styled from "styled-components";
import { useContext } from "react";
import { PostContext } from "./hooks/postContext";
import Link from "next/link";


const AvatarDiv = styled.div`
  margin-left: 3vw;
`;

const ProfilePic = styled.img`
  width: 5vw;
  height: 5vw;
  border-radius: 3vw;
  border: 0.2vw solid white;
`;
const Name = styled.p`
  font-weight: 500;
`;

const Avatar = () => {
  const post = useContext(PostContext);

  return (
    <AvatarDiv>
      <Link as="/about" href="/about">
        <a>
          <ProfilePic
            src={post.author.picture.url}
            alt={post.author.name[0].text}
          />
          <Name>{post.author.name}</Name>
        </a>
      </Link>
    </AvatarDiv>
  );
};

export default Avatar;
