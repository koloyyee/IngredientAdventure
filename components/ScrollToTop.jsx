import { makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyle = makeStyles({
  zoom: {
    padding:'2vw',
    margin: '0',
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgba(62,62,62, 1)"
  }
});

const ScrollToTop = props => {
  const style = useStyle();
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });
  const handleClick = e => {
    const a = (e.target.ownerDocument || document).querySelector("#hero");
    if (a) {
      a.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom className={style.zoom} in={trigger}>
      <div onClick={handleClick}> {children}</div>
    </Zoom>
  );
};

export default ScrollToTop;

ScrollToTop.propsType = {
  children: PropTypes.element.isRequired
};
