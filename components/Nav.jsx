import React, { useEffect } from "react";
import Head from "next/head";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ReactGA from "react-ga";

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
  a: {
    textDecoration: "none",
    color: "inherit",
    "&:visited": {
      color: "inherit"
    },
    "&:hover": {
      fontWeight: 800
    }
  }
}));

export default function BackToTop(props) {
  const styles = useStyles();
  const [value, setValue] = React.useState(0);

  const handleClickChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    ReactGA.initialize("UA-106131048-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-106131048-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
          }}
        />
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
                <a className={styles.a} href={item.id}>
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
