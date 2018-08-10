import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Wrapper from "../wrapper/wrapper";
import About from "../about/about";
import Experience from "../experience/experience";
import Portfolio from "../portfolio/portfolio";

import 'babel-polyfill';
import 'react-typist/dist/Typist.css';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Wrapper>

          <Route exact path ="/" render={(routeProps) => (          
            <About></About>
          )}/>
          
          <Route exact path ="/experience" render={(routeProps) => (
            <Experience></Experience>
          )}/>
          <Route exact path ="/portfolio" render={(routeProps) => (
            <Portfolio></Portfolio>
          )}/>
        </Wrapper>
      </BrowserRouter>
    );
  }
}
export default App;
