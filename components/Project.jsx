import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import Link from 'next/link'

const useStyles = makeStyles({
  style: {
    maxWidth: "20vw",
    },
  media: {
    flexDirection: "row"
  },
  font:{
    fontsize: '1vw',
    textDecoration: 'none',
    transition : 'fontWeight 2s',
    '&:hover':{
      fontWeight:800,
    },
    "&: visited":{
      color: 'inherit',
    }
  }
  
});

const Project = ({description, title, liveDemo, github, bgImg }) => {
  const cardStyle = useStyles();

  return (
    <Card className={cardStyle.style}>
      <CardActionArea className={cardStyle.media}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          minheight="10vw"
          image={bgImg}
          title={title}
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button className = {cardStyle.font} size="small" color="primary">
        <Link  href={liveDemo}>
          <a   className = {cardStyle.font} target="_blank" >Live Demo </a> 
        </Link>
        </Button>
        <Button className = {cardStyle.font}  size="small" color="primary">
        <Link  href={github}>
          <a  className = {cardStyle.font} target="_blank">GitHub</a> 
        </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
