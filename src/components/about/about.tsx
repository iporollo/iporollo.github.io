import * as React from 'react';
import PageContainer from '../page-container/page-container';
import TerminalImage from "../terminal-image/terminal-image";
import './about.css';

class About extends React.Component {
  public render() {
    return (
      <PageContainer>
        <div className="about-page">
          <div className="about-left">
            <div className="terminal_window">
              <header>
                <div className="terminal-buttons">
                  <div className="red_btn button"></div>
                  <div className="green_btn button"></div>
                  <div className="yellow_btn button"></div>
                </div>
                <div className="terminal-center">
                  <div className="terminal_name">About</div>
                </div>
                <div></div>
              </header>
              <div className="terminal_window">
                <div id="typed-strings" className="terminal_text">
                  <p>Ivans-Portfolio: ~ $ cat about_me.txt</p>
                  <p>Hello my name is Ivan Porollo and this is where I will write more about myself and this is also where more text needs to go because it needs to wrap.</p>
                  <p>Ivans-Portfolio: ~ $</p>
                </div>
                <span id="typed"></span>
              </div>
            </div>
          </div>
          <div className="about-right">
          <TerminalImage terminalName={"Resume"}/>
          <br/>
          <TerminalImage terminalName={"LinkedIn"}/>
          <br/>
          <TerminalImage terminalName={"Github"}/>
          <br/>

          </div> 
        </div>

        </PageContainer>

    );
  }
}

export default About;
