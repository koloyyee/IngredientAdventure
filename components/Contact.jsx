

const useStyle = makeStyles({
  div: {
    display: "flex",
    margin:'0 auto',
  },

  img: {
    height: '80%',
    width: '80%',
    margin: "2vw",
    opacity: 0.8,
    borderRadius: "10vw",
    "&:hover": {
      opacity: 1
    }
  },
  button: {
    overflow: "hidden",
    alignSelf: "center",
    maxHeight:"5vw",
    minHeight: "3vw",
    backgroundColor:"grey",
    margin:"1vw",
    padding: "0px 5vw 0vw 5vw",
    "&:hover": {
      backgroundColor: "#edd340"
    }
  },
  anchor: {
    textDecoration: "none",
    color: "#edd340",
    fontSize: "0.8rem",
    fontWeight: 600,
    "&:hover": {
      color: "grey",
      fontWeight: 1000
    }
  },
  table: {
    fontSize: '1rem',
    display:'flex',

  },
});

const Contact = () => {
  const styles = useStyle();

  return (
    <Container id="contact" className={styles.div} xs={12}>
      <img
        className={styles.img}
        src={"/image/IMG_3512.JPG"}
        alt="contact photo"
      />
       
        <Button className={styles.button} variant="outlined" size="large">
        <a className={styles.anchor} href="/resume/resume.pdf" download>
          Resume
        </a>
      </Button>
      
    </Container>
  );
};

export default Contact;
