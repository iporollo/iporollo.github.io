import * as React from 'react';
import PageContainer from '../page-container/page-container';
import TerminalImage from "../terminal-image/terminal-image";
import Typist from "react-typist";

import * as LinkedInLogo from '../../images/LinkedInLogo.png';
import * as GithubLogo from '../../images/GithubLogo.png';
import * as ResumeLogo from '../../images/ResumeLogo.png';

import './about.css';

interface AboutStates {
  isAboutTerminalTextShown: boolean;
}

class About extends React.Component<any, AboutStates> {

  public constructor(props: any){
    super(props);
    this.state = {
      isAboutTerminalTextShown: false
    }
    this.showAboutTerminalText = this.showAboutTerminalText.bind(this);
  }

  private showAboutTerminalText() {
    this.setState({isAboutTerminalTextShown: true});

  }

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

                  <p className={"terminal-custom-typist"}>
                    Ivans-Portfolio: ~ $ 
                    <Typist avgTypingDelay={40}
                          startDelay={1500}
                          className={"terminal-custom-typist-div"}
                          cursor={{
                              show: true,
                              blink: true,
                              element: '|',
                              hideWhenDone: true,
                              hideWhenDoneDelay: 50,
                            }}
                            onTypingDone={this.showAboutTerminalText}
                            >
                      cat about_me.txt              
                    </Typist>
                  </p>
                  {this.state.isAboutTerminalTextShown && [
                    <p key={"text1"}>Hello my name is Ivan Porollo and this is where I will write more about myself and this is also where more text needs to go because it needs to wrap.</p>
                    ,
                    <p key={"text2"}>This is the second paragraph sfbsjbhfsbf asbfb askjdf lajf akjb fklsjfb klasj fblksajfblsk labjsdf alkjbf k fklb fksbf k</p>
                    ,
                    <p className={"terminal-custom-typist"} key={"text3"}>
                      Ivans-Portfolio: ~ $
                      <Typist avgTypingDelay={40}
                        startDelay={500}
                        className={"terminal-custom-typist-div"}
                        cursor={{
                            show: true,
                            blink: true,
                            element: '|',
                            hideWhenDone: false,
                          }}>
                      </Typist>
                    </p>
                  ]}

                </div>
                <span id="typed"></span>
              </div>
            </div>
          </div>
          <div className="about-right">
          <TerminalImage terminalName={"Resume"} terminalImage={ResumeLogo} terminalImageHeight={60} terminalImageWidth={60} terminalLink={"/"}/>
          <TerminalImage terminalName={"LinkedIn"} terminalImage={LinkedInLogo} terminalImageHeight={50} terminalImageWidth={50} terminalLink={"https://www.linkedin.com/in/iporollo/"}/>
          <TerminalImage terminalName={"Github"} terminalImage={GithubLogo} terminalImageHeight={60} terminalImageWidth={60} terminalLink={"https://github.com/iporollo"}/>
          </div> 
        </div>

        </PageContainer>

    );
  }
}

export default About;
