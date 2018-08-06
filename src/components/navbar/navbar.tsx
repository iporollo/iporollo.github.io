import * as React from 'react';
import { Link } from 'react-router-dom';
import Typist from "react-typist";
import { NavbarTabsEnum } from "../../util/NavbarTabsEnum";
import ReactModal from "react-modal";
import ModalCloseIcon from "../icons/modal-close-icon";

import * as FREELANCE_LOGO from "../../images/FreelanceLogo.png";

import './navbar.css';

interface NavbarProps {
    selectedTab: NavbarTabsEnum;
    handleNavbarTabChangeCallback: any;
}

interface NavbarStates {
    isFreelanceModalOpen: boolean
}

class Navbar extends React.Component<NavbarProps, NavbarStates> {
    public constructor(props: NavbarProps) {
        super(props);
        this.state = {
            isFreelanceModalOpen: false
        }
        this.handleTabChange = this.handleTabChange.bind(this);
        this.handleFreelanceClick = this.handleFreelanceClick.bind(this);
        this.handleCloseFreelanceModal = this.handleCloseFreelanceModal.bind(this);
    }

    private handleTabChange(e: any) {
        switch(e.target.innerText) { 
            case "About": { 
               this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.About) 
               break; 
            } 
            case "Experience": { 
                this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.Experience) 
                break; 
            } 
            case "Portfolio": { 
                this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.Portfolio) 
                break; 
             } 
            default: { 
                this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.About) 
                break; 
            } 
         } 
    }

    private handleFreelanceClick() {
        this.setState({isFreelanceModalOpen: true});
    }

    private handleCloseFreelanceModal() {
        this.setState({isFreelanceModalOpen: false});

    }

  public render() {
    return (
        <React.Fragment>
        <header className="navbar">
            <div className="left">                 
                <h1>
                    <Typist avgTypingDelay={130}
                        startDelay={100}
                        className={"custom_typist"}
                        cursor={{
                            show: true,
                            blink: true,
                            element: '|',
                            hideWhenDone: true,
                            hideWhenDoneDelay: 1700,
                          }}>
                    Ivan Porollo               
                    </Typist>
                </h1>
            </div>
            {/* need this to fade in */}
            <div className="right">
                <Link to="/" 
                    style={this.props.selectedTab === NavbarTabsEnum.About ? {textDecoration: "underline"} : {}}
                    onClick={this.handleTabChange}>
                    About
                </Link>
                <Link to="/experience" 
                      style={this.props.selectedTab === NavbarTabsEnum.Experience ? {textDecoration: "underline"} : {}}
                      onClick={this.handleTabChange}>
                      Experience
                </Link>
                <Link to="/portfolio" 
                      style={this.props.selectedTab === NavbarTabsEnum.Portfolio ? {textDecoration: "underline"} : {}}
                      onClick={this.handleTabChange}>
                      Portfolio
                </Link>
                <a href="javascript:void(0)" onClick={this.handleFreelanceClick} className="freelance-link">Freelance</a>
            </div>
        </header>

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
                                <img src={FREELANCE_LOGO} height="40px" width="40px" className="modal_header_img"></img>
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
        </React.Fragment>
    );
  }
}

export default Navbar;
