import * as React from 'react';
import './portfolio.css';
import PageContainer from '../page-container/page-container';
import * as WKNDRLogo from '../../images/WKNDRLogo.png';
import * as ReactDashboard from '../../images/ReactDashboard.png';
import PortfolioProject from '../portfolio-project/portfolio-project';
import FeedfallLogoIcon from "../icons/feedfall-logo-icon";


class Portfolio extends React.Component {
  public render() {
    const REACT_DASHBOARD_TEXT = "The React Dashboard was part of a project that I created while working as a freelance web developer. This project is created with the ReactJS framework. It also uses a popular JavaScript chart library – ECharts.";
    const WKNDR_TEXT = 'WKNDR was a project I was tasked with as a freelance web developer. Using ReactJS, I built a fully responsive “Coming Soon” landing page.';
    const FEEDFALL_TEXT = 'Feedfall was the first time I used the ReactJS framework to build a website. This website was my first internship project while working at Wiretap. I was part of a team of developers at the company who re-wrote the website from jQuery logic to React.';
    
    return (
        <PageContainer>
            <div className="portfolio">
                <PortfolioProject reactDash terminalImage={ReactDashboard} terminalImageHeight={212} terminalImageWidth={400} terminalName={"React Dashboard"} terminalLink={"https://react-dashboard-interactive.herokuapp.com/"} projectText={REACT_DASHBOARD_TEXT}/>
                <PortfolioProject terminalImage={WKNDRLogo} terminalImageHeight={80} terminalImageWidth={250} terminalName={"WKNDR"} terminalLink={"https://wkndr-app.herokuapp.com/"} projectText={WKNDR_TEXT}/>
                <PortfolioProject svg={<FeedfallLogoIcon width={"300px"} height={"100px"}/>} terminalName={"Feedfall"} terminalLink={"https://feedfall.com/"} projectText={FEEDFALL_TEXT}/>
                <div className="other-projects">
                </div>
            </div>
        </PageContainer>
    );
  }
}

export default Portfolio;
