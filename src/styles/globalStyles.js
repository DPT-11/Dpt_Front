import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";


const customReset = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    :root {
        --vh: 100%;
    }
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
    }
    button {
        background: none;
        background-color: transparent;
        border: 0;
        border: none;
        padding: 0;
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }
    textarea,
    input {
        border: none;
        resize: none;
        outline: none;
        background-color: transparent;
        -webkit-box-shadow: none;
        box-shadow: none;
        -webkit-user-select: text;
        font-size: 16px;
    }
    /* Chrome autofill 스타일 제거, 커스텀 */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    }
    body: {
        height: 100vh;
    }
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${customReset}
  @font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face{
    fontFamily: 'Gamja Flower', cursive;
    src : url('https://fonts.googleapis.com/css2?family=Gamja+Flower&family=Noto+Sans+KR&display=swap');
    font-weight: 400;
    font-style: normal;
  }
  * {
    letter-spacing: -0.02em;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color:rgba(255,255,255,0);

  }

  .container {
    padding: 0 20px;
  }
`;

export default GlobalStyle;
