import * as React from 'react';
import './portfolio.css';
import PageContainer from '../page-container/page-container';
import * as WKNDRLogo from '../../images/WKNDRLogo.png';
import * as GithubLogo from '../../images/GithubLogo.png';
import PortfolioProject from '../portfolio-project/portfolio-project';
import FeedfallLogoIcon from "../icons/feedfall-logo-icon";


class Portfolio extends React.Component {
  public render() {
    return (
        <PageContainer>
            <div className="portfolio">
                <PortfolioProject terminalImage={GithubLogo} terminalImageHeight={60} terminalImageWidth={60} terminalName={"React Dashboard"} terminalLink={"/"} projectText={"placeholder value"}/>
                <PortfolioProject terminalImage={WKNDRLogo} terminalImageHeight={60} terminalImageWidth={150} terminalName={"WKNDR"} terminalLink={"https://wkndr-app.herokuapp.com/#/"} projectText={"placeholder value"}/>
                <PortfolioProject svg={<FeedfallLogoIcon width={"400px"} height={"175px"}/>} terminalName={"Feedfall"} terminalLink={"https://feedfall.com/"} projectText={"placeholder value"}/>
                <div className="other-projects">
                </div>
            </div>
        </PageContainer>
    );
  }
}

export default Portfolio;
