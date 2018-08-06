import * as React from 'react';
import PageContainer from '../page-container/page-container';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import ReactModal from "react-modal";
import ModalCloseIcon from "../icons/modal-close-icon";

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

interface ExperienceStates {
    isFreelanceModalOpen: boolean;
    isWiretapModalOpen: boolean;
    isBankOfAmericaModalOpen: boolean;
    isCinciChildrensModalOpen: boolean;
    isEducationModalOpen: boolean;

}

class Experience extends React.Component<any, ExperienceStates> {
    public constructor(props: any) {
        super(props);
        this.state = {
            isFreelanceModalOpen: false,
            isWiretapModalOpen: false,
            isBankOfAmericaModalOpen: false,
            isCinciChildrensModalOpen: false,
            isEducationModalOpen: false
        }
        this.openFreelanceModal = this.openFreelanceModal.bind(this);
        this.handleCloseFreelanceModal = this.handleCloseFreelanceModal.bind(this);
        this.openWiretapModal = this.openWiretapModal.bind(this);
        this.handleCloseWiretapModal = this.handleCloseWiretapModal.bind(this);
        this.openBankOfAmericaModal = this.openBankOfAmericaModal.bind(this);
        this.handleCloseBankOfAmericaModal = this.handleCloseBankOfAmericaModal.bind(this);
        this.openCinciChildrensModal = this.openCinciChildrensModal.bind(this);
        this.handleCloseCinciChildrensModal = this.handleCloseCinciChildrensModal.bind(this);
        this.openEducationModal = this.openEducationModal.bind(this);
        this.handleCloseEducationModal = this.handleCloseEducationModal.bind(this);
    }

    private openFreelanceModal() {
        this.setState({isFreelanceModalOpen: true});
    }
    private handleCloseFreelanceModal() {
        this.setState({isFreelanceModalOpen: false});
    }
    private openWiretapModal() {
        this.setState({isWiretapModalOpen: true});
    }
    private handleCloseWiretapModal() {
        this.setState({isWiretapModalOpen: false});
    }
    private openBankOfAmericaModal() {
        this.setState({isBankOfAmericaModalOpen: true});
    }
    private handleCloseBankOfAmericaModal() {
        this.setState({isBankOfAmericaModalOpen: false});
    }
    private openCinciChildrensModal() {
        this.setState({isCinciChildrensModalOpen: true});
    }
    private handleCloseCinciChildrensModal() {
        this.setState({isCinciChildrensModalOpen: false});
    }
    private openEducationModal() {
        this.setState({isEducationModalOpen: true});
    }
    private handleCloseEducationModal() {
        this.setState({isEducationModalOpen: false});
    }

  public render() {
    return (
        <PageContainer>
            <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Summer 2018 - present"
                    iconStyle={{ background: 'rgb(252, 209, 42)', color: '#fff' }}
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
                        <div className="tech-button">
                            <span className="tech-button-text">SQL Server</span>
                        </div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Freelance Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle subtitle"></h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <br/>
                    <div className="vertical-timeline-element-details">
                        <div className="details-button" onClick={this.openFreelanceModal}>
                            <span>Details</span>
                        </div>
                    </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <br/>
                    <div className="vertical-timeline-element-details">
                        <div className="details-button" onClick={this.openWiretapModal}>
                            <span>Details</span>
                        </div>
                    </div>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <br/>
                    <div className="vertical-timeline-element-details">
                        <div className="details-button" onClick={this.openBankOfAmericaModal}>
                            <span>Details</span>
                        </div>
                    </div>
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
                        <div className="tech-button">
                            <span className="tech-button-text">Meteor</span>
                        </div>
                        <div className="tech-button">
                            <span className="tech-button-text">MongoDB</span>
                        </div>
                    </div>
                    <h3 className="vertical-timeline-element-title">Web Developer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle subtitle">Cincinnati Children's Hospital</h4>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                    <br/>
                    <div className="vertical-timeline-element-details">
                        <div className="details-button" onClick={this.openCinciChildrensModal}>
                            <span>Details</span>
                        </div>
                    </div>
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
                    <br/>
                    <div className="vertical-timeline-element-details">
                        <div className="details-button" onClick={this.openEducationModal}>
                            <span>Details</span>
                        </div>
                    </div>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>

            <ReactModal isOpen={this.state.isFreelanceModalOpen}
                    onRequestClose={this.handleCloseFreelanceModal}
                    className="modal_container modal_container_simple"
                    overlayClassName="c_overlay c_overlay_dark"
                    closeTimeoutMS={200}
                    >    
                <div className="modal modal_light modal_simple">
                    <div className="modal_content">
                        <div className="modal_x-close" onClick={this.handleCloseFreelanceModal}>
                                <ModalCloseIcon fill={"rgba(0,0,0,0.5)"} />
                        </div>
                        <div className="modal_header modal_header_custom modal_header_background-filled">
                            <div className="modal_header_decor"></div>
                            <div className="modal_header_img_container" style={{backgroundColor: "rgb(252, 209, 42)"}}>
                                <img src={FREELANCE_LOGO} height="40px" width="40px" style={{paddingLeft: "12px", paddingTop: "12px"}}></img>
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="modal_body_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor non quam elementum semper ut et tortor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </ReactModal>

            <ReactModal isOpen={this.state.isWiretapModalOpen}
                    onRequestClose={this.handleCloseWiretapModal}
                    className="modal_container modal_container_simple"
                    overlayClassName="c_overlay c_overlay_dark"
                    closeTimeoutMS={200}
                    >    
                <div className="modal modal_light modal_simple">
                    <div className="modal_content">
                        <div className="modal_x-close" onClick={this.handleCloseWiretapModal}>
                                <ModalCloseIcon fill={"rgba(0,0,0,0.5)"} />
                        </div>
                        <div className="modal_header modal_header_custom modal_header_background-filled">
                            <div className="modal_header_decor"></div>
                            <div className="modal_header_img_container" style={{backgroundColor: "rgb(224, 176, 255)"}}>
                                <img src={WT_LOGO} height="40px" width="40px" style={{paddingLeft: "12px", paddingTop: "12px"}}></img>
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="modal_body_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor non quam elementum semper ut et tortor.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </ReactModal>

                <ReactModal isOpen={this.state.isBankOfAmericaModalOpen}
                    onRequestClose={this.handleCloseBankOfAmericaModal}
                    className="modal_container modal_container_simple"
                    overlayClassName="c_overlay c_overlay_dark"
                    closeTimeoutMS={200}
                    >    
                <div className="modal modal_light modal_simple">
                    <div className="modal_content">
                        <div className="modal_x-close" onClick={this.handleCloseBankOfAmericaModal}>
                                <ModalCloseIcon fill={"rgba(0,0,0,0.5)"} />
                        </div>
                        <div className="modal_header modal_header_custom modal_header_background-filled">
                            <div className="modal_header_decor"></div>
                            <div className="modal_header_img_container" style={{backgroundColor: "rgb(224, 176, 255)"}}>
                                <img src={BOA_LOGO} height="40px" width="40px" style={{paddingLeft: "12px", paddingTop: "12px"}}></img>
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="modal_body_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor non quam elementum semper ut et tortor.</p>
                            </div>
                        </div>

                    </div>
                </div>
        </ReactModal>

                <ReactModal isOpen={this.state.isCinciChildrensModalOpen}
                    onRequestClose={this.handleCloseCinciChildrensModal}
                    className="modal_container modal_container_simple"
                    overlayClassName="c_overlay c_overlay_dark"
                    closeTimeoutMS={200}
                    >    
                <div className="modal modal_light modal_simple">
                    <div className="modal_content">
                        <div className="modal_x-close" onClick={this.handleCloseCinciChildrensModal}>
                                <ModalCloseIcon fill={"rgba(0,0,0,0.5)"} />
                        </div>
                        <div className="modal_header modal_header_custom modal_header_background-filled">
                            <div className="modal_header_decor"></div>
                            <div className="modal_header_img_container" style={{backgroundColor: "rgb(224, 176, 255)"}}>
                                <img src={CCHMC_LOGO} height="40px" width="40px" style={{paddingLeft: "11px", paddingTop: "11px"}}></img>
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="modal_body_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor non quam elementum semper ut et tortor.</p>
                            </div>
                        </div>

                    </div>
                </div>
        </ReactModal>

                <ReactModal isOpen={this.state.isEducationModalOpen}
                    onRequestClose={this.handleCloseEducationModal}
                    className="modal_container modal_container_simple"
                    overlayClassName="c_overlay c_overlay_dark"
                    closeTimeoutMS={200}
                    >    
                <div className="modal modal_light modal_simple">
                    <div className="modal_content">
                        <div className="modal_x-close" onClick={this.handleCloseEducationModal}>
                                <ModalCloseIcon fill={"rgba(0,0,0,0.5)"} />
                        </div>
                        <div className="modal_header modal_header_custom modal_header_background-filled">
                            <div className="modal_header_decor"></div>
                            <div className="modal_header_img_container" style={{backgroundColor: "rgb(187, 0, 0)"}}>
                                <img src={OSU_LOGO} height="40px" width="40px" style={{paddingLeft: "12px", paddingTop: "10px"}}></img>
                            </div>
                        </div>
                        <div className="modal_body">
                            <div className="modal_body_description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dolor non quam elementum semper ut et tortor.</p>
                            </div>
                        </div>

                    </div>
                </div>
        </ReactModal>

        </PageContainer>
    );
  }
}

export default Experience;
