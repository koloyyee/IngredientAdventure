import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
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
            {/* <Link href="/blog">
                <Tab
                  className = {styles.tabs}
                  label='Blog'
                />

            </Link> */}
          </Tabs>
        </Paper>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
    </>
  );
}
