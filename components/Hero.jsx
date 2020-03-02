import { useRef, useState, useCallback, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  font-weight: 800;
  font-size: 5vw;
  will-change: transform, opacity, height;
  white-space: nowrap;
  cursor: pointer;
  margin: 12vw 0vw 12vw 12vw;
`;

const HeroText = () => {
  const ref = useRef([]);
  const [items, setItem] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      innerHeight: "0vw",
      transform: "perspective(600px) rotateX(0deg)",
      color: "#fcf93f"
    },
    enter: [{ opacity: 1, height: "5vw", innerHeight: "10w" }],
    leave: [
      { color: "#fcf93f" },
      { innerHeight: "0vw" },
      { opacity: 0, height: "0vw" }
    ]
  });

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    setItem([]);
    ref.current.push(setTimeout(() => setItem(["I", "Cook"]), 5000));
    ref.current.push(setTimeout(() => setItem(["I", "Programme"]), 3000));
    ref.current.push(setTimeout(() => setItem(["I", "Am", "DAVID KO"]), 8000));
  }, []);

  useEffect(() => void reset(), [])
  
  return (

    <Text>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="transitions-item"
          key={key}
          style={rest}
          onClick={reset}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </Text>
  );
};

export default HeroText;
