import Head from "next/head";
import theme from "../style/theme";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import GlobalStyle from "../style/globalStyle";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    return () => jssStyles.parentElement.appendChild(jssStyles);
  }, []);

  return (
    <>
      <Head>
        <title> Ingredient Adventure </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-106131048-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`,
          }}
        />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Jura:wght@515&display=swap');
        </style>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
