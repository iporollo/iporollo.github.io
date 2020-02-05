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

  public constructor(props: any) {
    super(props);
    this.state = {
      isAboutTerminalTextShown: false
    }
    this.showAboutTerminalText = this.showAboutTerminalText.bind(this);
  }

  private showAboutTerminalText() {
    this.setState({ isAboutTerminalTextShown: true });

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
                  <div className="terminal_name">About Me</div>
                </div>
                <div></div>
              </header>
              <div id="typed-strings" className="terminal_text">

                <span className={"terminal-custom-typist"}>
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
                </span>
                {this.state.isAboutTerminalTextShown && [
                  <p key={"text1"}>
                    Welcome! Thanks for checking out my portfolio website. I am recent grad from The Ohio State University and am currently employed at Weedmaps.
                    </p>
                  ,
                  <p key={"text2"}>From a professional standpoint, I started freelancing during my senior year of college. I continued freelancing after graduation before joining as a front-end developer at Weedmaps. You can find out more about what I've done in the <span style={{ textDecoration: "underline", color: "#98FB98" }}>Experience</span> and <span style={{ textDecoration: "underline", color: "#98FB98" }}>Portfolio</span> tabs.
                    </p>
                  ,
                  <p key={"text3"}>If you are interested in my freelance work and would like to contact me to discuss a project, please visit the <span style={{ textDecoration: "underline", color: "#98FB98" }}>Freelance</span> tab for more information.
                    </p>
                  ,
                  <span className={"terminal-custom-typist"} key={"text4"}>
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
                  </span>
                ]}

              </div>
              <span id="typed"></span>
            </div>
          </div>
          <div className="about-right">
            <TerminalImage terminalName={"Resume"} terminalImage={ResumeLogo} terminalImageHeight={60} terminalImageWidth={60} terminalLink={"https://drive.google.com/file/d/1GAoChdYmpFGA-7u5OwNbwPOrlqK5dOCu/view?usp=sharing"} />
            <TerminalImage terminalName={"LinkedIn"} terminalImage={LinkedInLogo} terminalImageHeight={50} terminalImageWidth={50} terminalLink={"https://www.linkedin.com/in/iporollo/"} />
            <TerminalImage terminalName={"Github"} terminalImage={GithubLogo} terminalImageHeight={60} terminalImageWidth={60} terminalLink={"https://github.com/iporollo"} />
          </div>
        </div>

      </PageContainer>

    );
  }
}

export default About;
