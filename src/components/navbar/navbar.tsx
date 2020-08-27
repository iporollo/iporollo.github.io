import * as React from "react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { NavbarTabsEnum } from "../../util/NavbarTabsEnum";
import ReactModal from "react-modal";
import ModalCloseIcon from "../icons/modal-close-icon";
import Dropdown, { MenuItem } from "@trendmicro/react-dropdown";

import * as FREELANCE_LOGO from "../../images/FreelanceLogo.png";

import "./navbar.css";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";

interface NavbarProps {
  selectedTab: NavbarTabsEnum;
  handleNavbarTabChangeCallback: any;
}

interface NavbarStates {
  isFreelanceModalOpen: boolean;
}

class Navbar extends React.Component<NavbarProps, NavbarStates> {
  public constructor(props: NavbarProps) {
    super(props);
    this.state = {
      isFreelanceModalOpen: false,
    };
    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleFreelanceClick = this.handleFreelanceClick.bind(this);
    this.handleCloseFreelanceModal = this.handleCloseFreelanceModal.bind(this);
  }

  private handleTabChange(e: any) {
    switch (e.target.innerText) {
      case "About": {
        this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.About);
        break;
      }
      case "Experience": {
        this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.Experience);
        break;
      }
      case "Portfolio": {
        this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.Portfolio);
        break;
      }
      default: {
        this.props.handleNavbarTabChangeCallback(NavbarTabsEnum.About);
        break;
      }
    }
  }

  private handleFreelanceClick() {
    this.setState({ isFreelanceModalOpen: true });
    return false;
  }

  private handleCloseFreelanceModal() {
    this.setState({ isFreelanceModalOpen: false });
  }

  public render() {
    return (
      <React.Fragment>
        <header className="navbar">
          <div className="left">
            <h1>
              <Typist
                avgTypingDelay={130}
                startDelay={100}
                className={"custom_typist"}
                cursor={{
                  show: true,
                  blink: true,
                  element: "|",
                  hideWhenDone: true,
                  hideWhenDoneDelay: 1700,
                }}
              >
                Ivan Porollo
              </Typist>
            </h1>
          </div>
          {/* need this to fade in */}
          <div className="right">
            <Link
              to="/"
              style={
                this.props.selectedTab === NavbarTabsEnum.About
                  ? { textDecoration: "underline" }
                  : {}
              }
              onClick={this.handleTabChange}
            >
              About
            </Link>
            {/* <Link to="/experience"
                            style={this.props.selectedTab === NavbarTabsEnum.Experience ? { textDecoration: "underline" } : {}}
                            onClick={this.handleTabChange}>
                            Experience
                </Link>
                        <Link to="/portfolio"
                            style={this.props.selectedTab === NavbarTabsEnum.Portfolio ? { textDecoration: "underline" } : {}}
                            onClick={this.handleTabChange}>
                            Portfolio
                </Link>
                        <Link to="#" onClick={this.handleFreelanceClick} className="freelance-link">Freelance</Link> */}
            <a href="https://usekosmos.com">Kosmos</a>
          </div>
          <div className="dropdown-toggle-container">
            <Dropdown pullRight onSelect={(eventKey: any) => {}}>
              <Dropdown.Toggle iconOnly noCaret btnStyle="link">
                <i className="fa fa-bars" id="dropdown-toggle-icon" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <MenuItem
                  active={
                    this.props.selectedTab === NavbarTabsEnum.About
                      ? true
                      : false
                  }
                  onSelect={(eventKey: any) => {
                    window.location.replace("/");
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  active={
                    this.props.selectedTab === NavbarTabsEnum.Experience
                      ? true
                      : false
                  }
                  onSelect={(eventKey: any) => {
                    window.location.replace("/experience");
                  }}
                >
                  Experience
                </MenuItem>
                <MenuItem
                  active={
                    this.props.selectedTab === NavbarTabsEnum.Portfolio
                      ? true
                      : false
                  }
                  onSelect={(eventKey: any) => {
                    window.location.replace("/portfolio");
                  }}
                >
                  Portfolio
                </MenuItem>
                <MenuItem onSelect={this.handleFreelanceClick}>
                  Freelance
                </MenuItem>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </header>

        <ReactModal
          isOpen={this.state.isFreelanceModalOpen}
          onRequestClose={this.handleCloseFreelanceModal}
          className="modal_container modal_container_simple"
          overlayClassName="c_overlay c_overlay_dark"
          closeTimeoutMS={200}
        >
          <div className="modal modal_light modal_simple">
            <div className="modal_content">
              <div
                className="modal_x-close"
                onClick={this.handleCloseFreelanceModal}
              >
                <ModalCloseIcon fill={"rgba(0,0,0,0.5)"} />
              </div>
              <div className="modal_header modal_header_custom modal_header_background-filled">
                <div className="modal_header_decor"></div>
                <div
                  className="modal_header_img_container"
                  style={{ backgroundColor: "rgb(252, 209, 42)" }}
                >
                  <img
                    src={FREELANCE_LOGO}
                    height="40px"
                    width="40px"
                    className="modal_header_img"
                  ></img>
                </div>
              </div>
              <div className="modal_body">
                <div className="modal_body_description">
                  <p>
                    I'm a web application developer with 3+ years of experience.
                    I have worked with multiple companies and projects to create
                    quality websites.
                  </p>
                  <p>
                    I can help with projects revolving around the creation of
                    websites using React.js and many other front-end
                    technologies (HTML, CSS, JQuery, Ajax).
                  </p>
                  <p>
                    I have also interfaced with and developed many RESTful APIs,
                    using technologies such as Ruby on Rails, C#, and Python.{" "}
                  </p>
                  <p>
                    If you’re interested in contacting me about a project,
                    please email me at:
                  </p>
                  <p>iporollo(at)gmail(dot)com</p>
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
