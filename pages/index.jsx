import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import styled, { keyframes } from "styled-components";
import { useSpring, animated } from "react-spring";
import HeroText from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Nav from "../components/Nav";
import ScrollTop from "../components/ScrollToTop";
import Contact from "../components/Contact";
import { Container } from "@material-ui/core";
import Footer from '../components/Footer' 
import About from "../components/About"

const Top = styled.div`
  display: flex;
  min-height: 50vw;
  justify-content: space-between;
  background: rgb(62, 62, 62);
  background: linear-gradient(
    135deg,
    rgba(62, 62, 62, 1) 0%,
    rgba(127, 127, 128, 0.6) 40%,
    rgba(255, 255, 255, 1) 100%
  );
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%)
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
  position:relative;
  max-height: 20vw;
  max-width: 20vw;
  min-height: 150px;
  min-width: 150px;
  border-radius: 50%;
  border: 0.5em white solid;
  animation: ${fadeIn} 3s ease-in;
  margin: 10vw;
`;

const App = (props) => {

  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Container maxWidth="xl" style={{margin: '0 auto', padding: 0}}>
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
        <About />
        <Contact />
       <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </LowerMid>
    </Container>
  );
};

export default App;
