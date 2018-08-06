import * as React from 'react';
import './portfolio.css';
import PageContainer from '../page-container/page-container';
import * as GithubLogo from '../../images/GithubLogo.png';
import PortfolioProject from '../portfolio-project/portfolio-project';


class Portfolio extends React.Component {
  public render() {
    return (
        <PageContainer>
            <div className="portfolio">
                <PortfolioProject terminalImage={GithubLogo} terminalImageHeight={60} terminalImageWidth={60} terminalName={"React Dashboard"} terminalLink={"/"} projectText={"placeholder value"}/>
                <PortfolioProject terminalImage={GithubLogo} terminalImageHeight={60} terminalImageWidth={60} terminalName={"WKNDR"} terminalLink={"/"} projectText={"placeholder value"}/>
                <PortfolioProject terminalImage={GithubLogo} terminalImageHeight={60} terminalImageWidth={60} terminalName={"Feedfall"} terminalLink={"/"} projectText={"placeholder value"}/>
                <div className="other-projects">
                    
                </div>
            </div>
        </PageContainer>
    );
  }
}

export default Portfolio;
