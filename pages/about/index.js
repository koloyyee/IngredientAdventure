import { getAbout } from "../../lib/api";
import RichText from "prismic-reactjs";
import SideNav from "../../components/navbar";
import Link from "next/link";
import styled from 'styled-components';

const ProfilePic = styled.img `
  
  max-width: 20vw;
  transition-duration: 0.5s;
  border-radius: 1vw;
  &:hover {
    box-shadow: 0 10px 11px rgba(33, 33, 33, 0.2);
    transition-duration: 1s;
  }
`
const ResumeBtn = styled.button `
  border-radius: 1vw;
  border: none;
  width: 5vw;
  height: 2vw;
  overflow: hidden;
  margin-bottom: 1vw;
  background-color: ${({theme}) => theme.light.navText};
  transition: 1s;

  &:hover {
    background-color: ${({theme}) => theme.light.lightRed};
  }
`;

const Download = styled.a `
  color: white;
  &:hover {
    color: white;
    font-weight: 800;
    text-shadow:none;
  }
  
`

const About = ({ about }) => {
  return (
    <>
      <SideNav />
      
      {about.map((info) => {
        return (

          <div key={info.node.about[0].text}>
            <h1>{info.node.about[0].text}</h1>
          <ProfilePic src={info.node.avatar.url} />
            <p>{info.node.introduction[0].text}</p>
            <div>
              <h4> TechStack </h4>
              <p>{info.node.techstack[0].text}</p>
            </div>
            <div>
              <h4>Contact</h4>
              <a href={`mailto:${info.node.contacts[0].text}`}>
                {info.node.contacts[0].text}
              </a>
            </div>
            <div>
              <h4>Popups</h4>
              <a href="https://testkitchen.com.hk/davidko/" target="_blank"> At Test Kitchen </a>
              <br/>
              <br/>
              <a href="https://www.pmq.org.hk/event/roasitas-at-pmq-taste-kitchen/" target="_blank"> At PMQ Taste Kitchen </a>
              <h4>Private Dinner</h4>
              <a href="https://www.testkitchen.com.hk/test-kitchen-chefs-table/">Private Dinner at Test Kitchen</a>
            </div>
            <br/>
            <ResumeBtn>
              <Download href="/resume/resume.pdf" download>
                Resume
              </Download>
            </ResumeBtn>
          </div>
        );
      })}
    </>
  );
};

export const getStaticProps = async () => {
  const about = await getAbout();
  return {
    props: { about },
  };
};

export default About;
