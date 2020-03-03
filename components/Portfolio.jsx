import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Project from "./Project";
import { makeStyles } from "@material-ui/core";

const projects = [
  {
    id: 1,
    title: "Betky",
    liveDemo: "https://www.google.com",
    github: "",
    bgImg: "https://i.picsum.photos/id/1/5616/3744.jpg",
    description: " Betky is a final project at coding bootcamp, it is a mock online gambling & streaming website."
  },
  {
    id: 2,
    title: "App Store Mock",
    liveDemo: "https://koloyyee.github.io/app-store-hook-infiniteScroll-fetch",
    github: "https://github.com/koloyyee/app-store-hook-infiniteScroll-fetch",
    bgImg: "https://i.picsum.photos/id/2/5616/3744.jpg",
    description: "This project used React Hooks and IntersectionObserver API, mocking app store with infinite scrolling."
  },
  {
    id: 3,
    title: "Roasita's Blog",
    liveDemo: "https://roasitas.herokuapp.com/",
    github: "https://github.com/koloyyee/roasitas",
    bgImg: "https://i.picsum.photos/id/2/5616/3744.jpg",
    description: "This project used React Hooks and IntersectionObserver API, mocking app store with infinite scrolling."
  }
];

const useStyles = makeStyles({
  intro:{
    paddingTop:'3vw',
    margin: 0,
    textAlign : 'center',


  },

  grid: {
    display: "flex",
    padding: '8vw',
    alignContent: 'center',
  },
  span:{
    fontStyle: 'italic'
  }

});

const Portfolio = () => {
  const style = useStyles();

  return (
    <Container id="portfolio" fixed>
      <div className = {style.intro}>
        <h2 className = {style.intro} >Works</h2>
        <p> 'Doing is the <span className = {style.span}>BEST</span> way to learn.'</p>
      </div>
      <Grid container className={style.grid}>
        {projects.map((project, i) => {
          return (
            <Grid  key={i} item xs>
              <Project
                title={project.title}
                liveDemo={project.liveDemo}
                github={project.github}
                bgImg={project.bgImg}
                description={project.description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Portfolio;
