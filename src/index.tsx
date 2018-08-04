import * as React from "react";
import { render } from "react-snapshot";
import App from "./components/App/App";
// import * as WebFont from 'webfontloader';
import "./styles.css";

// WebFont.load({
//   google: {
//     families: ['Source Code Pro:300,400,700', 'sans-serif']
//   }
// });

render(
  <App />,
  document.getElementById('root') as HTMLElement
);
