import * as React from "react";
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import App from "./components/App/App";
import "./styles.css";

render(
  <App />,
  document.getElementById('root') as HTMLElement
);
