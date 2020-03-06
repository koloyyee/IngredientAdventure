import Head from 'next/head';
import "./index.css";
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import {useEffect} from 'react';


export default function MyApp({ Component, pageProps }) {
  
  useEffect(()=>{
    const jssStyles = document.querySelector('#jss-server-side'); 
     if(jssStyles){jssStyles.parentElement.removeChild(jssStyles) } 
      
     return ()=> jssStyles.parentElement.appendChild(jssStyles)
  }, [])

  return (
    <>
      <Head>
        <title> Ingredient Adventure </title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>

    </> 
  );
}
