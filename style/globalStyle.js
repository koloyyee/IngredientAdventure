import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    html{
        margin: 0;
        padding: 0;
        background-color:${({ theme }) => theme.light.body}
    }
   body{
       font-feature-settings: "tnum";
       margin-left: 20vw;
   }
   @font-face {
       font-family: "Jura", 'sans-serif';
       src: url('../public/static/fonts/Jura-VariableFont_wght.ttf')
   }
   h1, h2, h3, h4, h5, p, a, div {
    font-family: "Jura";
    color:black;

   }

   a {
       text-decoration: none;
       cursor:pointer;
    transition-duration: 0.5s;

    a:visited {
        color: black;
        }
    :hover {
    font-weight: 1000;
    text-shadow: #ddd 2px 0 1px;
    transition-duration: 0.5s;
    color: ${({ theme }) => theme.light.lightRed};

    }
   }
`;
export default GlobalStyle;
