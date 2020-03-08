import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Project from "./Project";
import { makeStyles, createStyles } from "@material-ui/core";

const projects = [
  {
    id: 1,
    title: "Betky",
    liveDemo: "/image/betky.gif",
    github: "https://github.com/koloyyee/betky",
    bgImg: "/image/Betky_logo-1-01.png",
    description: "Betky(source code only) is a final project at coding bootcamp, it is a mock online gambling & streaming website."
  },
  {
    id: 2,
    title: "App Store Mock",
    liveDemo: "https://koloyyee.github.io/app-store-hook-infiniteScroll-fetch",
    github: "https://github.com/koloyyee/app-store-hook-infiniteScroll-fetch",
    bgImg: "/image/app-store-og.png",
    description: "This project used React Hooks and IntersectionObserver API, mocking app store with infinite scrolling."
  },
  {
    id: 3,
    title: "Roasita's Blog",
    liveDemo: "https://roasitas.herokuapp.com/",
    github: "https://github.com/koloyyee/roasitas",
    bgImg: "/image/Roasita's-short-2-02.png",
    description: "This project used React Hooks and IntersectionObserver API, mocking app store with infinite scrolling."
  }
];

const useStyles = makeStyles( theme => ({
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
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },

}));

const customStyle =()=>{
  createStyles({
    
  })
}

const Portfolio = () => {
  const style = useStyles();

  return (
    <Container id="portfolio" className={style.cardGrid} maxWidth="md">
      <div className = {style.intro} id="portfolio-header">
        <h2 className = {style.intro} >Works</h2>
        <p> 'Doing is the <span className = {style.span}>BEST</span> way to learn.'</p>
      </div>
      <Grid container spacing={4}>
        {projects.map((project, i) => {
          return (
            <Grid  key={i} item xs={12} sm ={6} md={4}>
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
