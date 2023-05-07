import { css } from '@emotion/react';
import 'modern-normalize';

export const Style = css`
  body {
    margin: 0;
    padding-bottom: 50px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 18px;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  p,
  h1,
  h2,
  h3 {
    margin: 0;
  }
  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  img {
    display: inline-flex;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;
