import * as React from "react";
// import ReactDOM from 'react-dom';
import { hydrate, render } from "react-dom";
import App from "./components/App/App";
import "./styles.css";

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );


