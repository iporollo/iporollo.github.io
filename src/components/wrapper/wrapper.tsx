import * as React from 'react';
import Navbar from "../navbar/navbar";
import { NavbarTabsEnum } from "../../util/NavbarTabsEnum";
import './wrapper.css';

interface WrapperStates {
    selectedTab: NavbarTabsEnum;
}

class Wrapper extends React.Component<any, WrapperStates> {

    public constructor(props: any) {
        super(props);
        this.state = {
            selectedTab: this.matchCurrentUrl()
        }
        this.handleNavbarTabChange = this.handleNavbarTabChange.bind(this);
    }

    public handleNavbarTabChange(selectedTab: NavbarTabsEnum) {
        this.setState({selectedTab})
    }

    private matchCurrentUrl() {
        switch(window.location.pathname) { 
            case "/": { 
               return NavbarTabsEnum.About;
            } 
            case "/experience": { 
                return NavbarTabsEnum.Experience;
            } 
            case "/portfolio": { 
                return NavbarTabsEnum.Portfolio;
            } 
            default: { 
                return NavbarTabsEnum.About; 
            } 
         } 
    }

  public render() {
    return (
        <div className="wrapper">
            <Navbar handleNavbarTabChangeCallback={this.handleNavbarTabChange} selectedTab={this.state.selectedTab}/>
            <div>
                {this.props.children}
            </div>  
        </div>
    );
  }
}

export default Wrapper;
