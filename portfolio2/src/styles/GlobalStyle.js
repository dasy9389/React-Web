import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --mainColor: #15023a;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        text-transform: capitalize;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        position: relative;
    }
    .App{
        height: 100vh;
    }
`;

export default GlobalStyle;