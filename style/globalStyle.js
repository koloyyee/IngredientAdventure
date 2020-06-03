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
       font-family: "Jura";
       src: url('/static/fonts/Jura-VariableFont_wght.ttf')
   }
   h1, h2, h3, h4, h5, p, a, div {
    font-family: "Jura";
    color:black;
   }

   a {
       text-decoration: none;
       cursor:pointer;
       color: ${({ theme }) => theme.light.navText}

    a:visited {
        color: ${({ theme }) => theme.light.navText}
        }
    :hover {
    font-weight: 1000;
    text-shadow: #ddd 2px 0 1px;
    transition-duration: 0.5s;
    }
   }
`;
export default GlobalStyle;
