import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import About from "../about/about";
import Wrapper from "../wrapper/wrapper";
import 'babel-polyfill'
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Route exact path ="/" render={(routeProps) => (
            <About></About>
          )}/>
        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
