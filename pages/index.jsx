import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import HeroText from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Nav from "../components/Nav";
import ScrollToTop from "../components/ScrollToTop";
import Contact from "../components/Contact";
import { Container } from "@material-ui/core";
 


const Top = styled.div`
  display: flex;
  min-height: 50vw;
  justify-content: space-between;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    135deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(127, 127, 128, 1) 5%,
    rgba(255, 255, 255, 1) 100%
  );
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
    rgba(127, 127, 128, 0.5) 60%,
    rgba(62, 62, 62, 1) 100%
  );
`;

const fadeIn = keyframes`
    from{ opacity: 0}
    to{opacity: 1}
`;

const Img = styled.img`
  max-height: 20vw;
  max-width: 20vw;
  border-radius: 50%;
  border: 0.5em white solid;
  animation: ${fadeIn} 3s ease-in;
  margin: 10vw;
`;

const App = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });


  return (
    <Container maxWidth="xl">
      <Nav />
      <Top>
        <animated.div id="hero" style={fade}>
          <HeroText />
        </animated.div>
        <Img src={"/image/IMG_3513.JPG"} alt="profile pic" />
      </Top>
      <Mid>
          <Portfolio />
      </Mid>
      <LowerMid>
        <Contact />
        <ScrollToTop>
          <Fab color="secondary" size="small" aria-label="Home">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollToTop>
      </LowerMid>
    </Container>
  );
};

export default App;
