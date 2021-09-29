import Layout from "../components/Layout";
import Theme from "../components/Theme";
import * as styled from "styled-components";

const GlobalStyle = styled.createGlobalStyle`
  *,
  html {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Mukta", sans-serif;
    font-weight: 200;
    font-size: 20px;
    line-height: 1.4rem;
    color: ${({ theme }) => theme.colors.primaryFont};
    background-color: ${({ theme }) => theme.colors.backgroundColor};
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
    font-family: Satoshi;
    &:focus-visible {
      outline: 2px solid black;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  );
}

export default MyApp;
