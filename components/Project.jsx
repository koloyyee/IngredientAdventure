
import Link from 'next/link'

const useStyles = makeStyles({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
  cardMedia: {
    paddingTop: '56.25%'
  },
  font:{
    fontsize: '3em',
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
    <Card className={cardStyle.card} raised={true}>
      <CardActionArea >
        <CardMedia
          component="img"
          alt={title + " image"}
          image={bgImg}
          title={title}
        />
         <CardContent>
          <Typography gutterBottom variant="h5" component="h2" nowrap>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" nowrap>
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
