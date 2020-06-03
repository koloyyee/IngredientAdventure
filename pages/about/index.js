import { getAbout } from "../../lib/api";
import RichText from "prismic-reactjs";
import SideNav from "../../components/navbar";
import Link from "next/link";

const About = ({ about }) => {
  return (
    <>
      <SideNav />
      {about.map((info) => {
        return (
          <div key={info.node.about[0].text}>
            <h1>{info.node.about[0].text}</h1>
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

            <img src={info.node.avatar.url} />
            <div>
              <Link as={`/`} href={"/"}>
                <a>home</a>
              </Link>
            </div>
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
