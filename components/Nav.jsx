import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);


const useStyles = makeStyles(theme => ({
  padding: {
    padding: theme.spacing(3)
  },
  navContent: {
    position: "fixed",
    top: "0%",
    width: "100%",
    height: "5vw",
    background: "rgb(62,62,62)",
    background:
      "linear-gradient(180deg, rgba(62,62,62,1) 0%, rgba(127,127,128,0.7497199563419117) 100%, rgba(127,127,128,0) 100%)"
  },
  tabs: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const navItems = [
  {
    id: "#hero",
    label: "Home"
  },
  {
    id: "#portfolio",
    label: "Works"
  },
  {
    id: "#contact",
    label: "Contact"
  }
];

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  return (
    <div className={classes.navContent}>
      <StyledTabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        aria-label="styled tabs"
      >
        {navItems.map((item, i) => {
          return (
            <Link key={i} href={item.id}>
              <StyledTab component={'span'} label={item.label} />
            </Link>
          );
        })}
      </StyledTabs>
      <Typography className={classes.padding} />
    </div>
  );
}
