import * as React from 'react';
import { Link } from 'react-router-dom';
import Typist from "react-typist";
import { NavbarTabsEnum } from "../../util/NavbarTabsEnum";
import './navbar.css';

interface NavbarProps {
    selectedTab: NavbarTabsEnum;
    handleNavbarTabChangeCallback: any;
}

class Navbar extends React.Component<NavbarProps, any> {
    public constructor(props: NavbarProps) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
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

  public render() {
    return (
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
                <a href="javascript:void(0)">Freelance</a>
            </div>
        </header>
    );
  }
}

export default Navbar;
