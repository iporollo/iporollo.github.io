import * as React from 'react';
import PageContainer from '../page-container/page-container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import * as OSU_LOGO from "../../images/OSULogo.png";
import * as CCHMC_LOGO from "../../images/CCHMCLogo.png";
import * as BOA_LOGO from "../../images/BOALogo.png";
import * as WT_LOGO from "../../images/WiretapLogo.png";
import * as FREELANCE_LOGO from "../../images/FreelanceLogo.png";

import 'react-vertical-timeline-component/style.min.css';
import './experience.css';

const OSU_IMG: any = <img src={OSU_LOGO} height="40px" width="40px" style={{paddingLeft: "10px", paddingTop: "8px"}}></img>
const CCHMC_IMG: any = <img src={CCHMC_LOGO} height="40px" width="40px" style={{paddingLeft: "9px", paddingTop: "9px"}}></img>
const BOA_IMG: any = <img src={BOA_LOGO} height="40px" width="40px" style={{paddingLeft: "11px", paddingTop: "10px"}}></img>
const WT_IMG: any = <img src={WT_LOGO} height="40px" width="40px" style={{paddingLeft: "10px", paddingTop: "11px"}}></img>
const FREELANCE_IMG: any = <img src={FREELANCE_LOGO} height="40px" width="40px" style={{paddingLeft: "10px", paddingTop: "11px"}}></img>

class Experience extends React.Component {
  public render() {
    return (
        <PageContainer>
            <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Summer 2018 - present"
                    iconStyle={{ background: 'rgb(224, 176, 255)', color: '#fff' }}
                    icon={FREELANCE_IMG}
                >
                    <div className="vertical-timeline-element-technologies">
                        <div className="tech-button">
                            <span className="tech-button-text">ReactJS</span>
                        </div>
                        <div className="tech-button">
                            <span className="tech-button-text">C#</span>
                        </div>
                        <div className="tech-button">
                            <span className="tech-button-text">Ruby on Rails</span>
                        </div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle subtitle"></h4>
                    <p>
                    Description tbd
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Fall 2017 - Summer 2018"
                    iconStyle={{ background: 'rgb(224, 176, 255)', color: '#fff' }}
                    icon={WT_IMG}
                >
                    <div className="vertical-timeline-element-technologies">
                        <div className="tech-button">
                            <span className="tech-button-text">ReactJS</span>
                        </div>
                        <div className="tech-button">
                            <span className="tech-button-text">C#</span>
                        </div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle subtitle">Wiretap</h4>
                    <p>
                    Description tbd
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Summer 2017"
                    iconStyle={{ background: 'rgb(224, 176, 255)', color: '#fff' }}
                    icon={BOA_IMG}
                >
                    <div className="vertical-timeline-element-technologies">
                        <div className="tech-button">
                            <span className="tech-button-text">Python</span>
                        </div>
                        <div className="tech-button">
                            <span className="tech-button-text">Flask</span>
                        </div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle subtitle">Bank of America</h4>
                    <p>
                    Description tbd
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Summer 2016"
                    iconStyle={{ background: 'rgb(224, 176, 255)', color: '#fff' }}
                    icon={CCHMC_IMG}
                >
                    <div className="vertical-timeline-element-technologies">
                        <div className="tech-button">
                            <span className="tech-button-text">Angular2</span>
                        </div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle subtitle">Cincinnati Children's Hospital</h4>
                    <p>
                    Description tbd
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Fall 2015 - Spring 2019 "
                    iconStyle={{ background: 'rgb(187, 0, 0)', color: '#fff' }}
                    icon={OSU_IMG}
                >
                    <h3 className="vertical-timeline-element-title">Education - Double Major: </h3>
                    <h3 className="vertical-timeline-element-title double-major-spacing"> • Bachelor of Science in Computer Science & Engineering</h3>
                    <h3 className="vertical-timeline-element-title double-major-spacing"> • Bachelor of Art in Russian Language</h3>
                    <p>The Ohio State University</p>
                    {/* <p>
                    Computer Science & Engineering: Focus on artificial intelligence studies
                    </p>
                    <p>
                    Russian: Focus on language studies
                    </p> */}
                </VerticalTimelineElement>
                {/* <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={""}
                /> */}
                </VerticalTimeline>
            </div>  
        </PageContainer>
    );
  }
}

export default Experience;
