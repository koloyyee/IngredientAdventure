import React from "react";
import Head from 'next/head';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

const useStyles = makeStyles(theme => ({
  tabs: {
    color: "rgb(62,62,62)"
  },
  a:{
    textDecoration: 'none',
    color:'inherit',
    '&:visited':{
      color:'inherit',
        
    },
    '&:hover':{
      fontWeight: 800,
    }
  }
}));

export default function BackToTop(props) {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleClickChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      <CssBaseline />
      <AppBar>
        <Paper>
          <Tabs
            className={styles.tabs}
            value={value}
            onChange={handleClickChange}
            indicatorColor="none"
            textColor="primary"
            centered
          >
            {navItems.map(item => {
              return (
                <a className ={styles.a} href={item.id}>
                  <Tab
                    className={styles.tabs}
                    label={item.label}
                    key={item.id}
                  />
                </a>
              );
            })}
          </Tabs>
        </Paper>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
