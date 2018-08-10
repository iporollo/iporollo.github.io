import * as React from 'react';
import './portfolio.css';
import PageContainer from '../page-container/page-container';
import * as WKNDRLogo from '../../images/WKNDRLogo.png';
import * as ReactDashboard from '../../images/ReactDashboard.png';
import PortfolioProject from '../portfolio-project/portfolio-project';
import FeedfallLogoIcon from "../icons/feedfall-logo-icon";


class Portfolio extends React.Component {
  public render() {
    return (
        <PageContainer>
            <div className="portfolio">
                <PortfolioProject reactDash terminalImage={ReactDashboard} terminalImageHeight={212} terminalImageWidth={400} terminalName={"React Dashboard"} terminalLink={"/"} projectText={"placeholder value"}/>
                <PortfolioProject terminalImage={WKNDRLogo} terminalImageHeight={80} terminalImageWidth={250} terminalName={"WKNDR"} terminalLink={"https://wkndr-app.herokuapp.com/#/"} projectText={"placeholder value"}/>
                <PortfolioProject svg={<FeedfallLogoIcon width={"300px"} height={"100px"}/>} terminalName={"Feedfall"} terminalLink={"https://feedfall.com/"} projectText={"placeholder value"}/>
                <div className="other-projects">
                </div>
            </div>
        </PageContainer>
    );
  }
}

export default Portfolio;
