import * as React from 'react';
import './portfolio-project.css';
import TerminalImage from '../terminal-image/terminal-image';

interface PortfolioProjectProps {
    terminalName: string;
    terminalImage: any;
    terminalImageHeight: number;
    terminalImageWidth: number;
    terminalLink: string;
    projectText: string;
}

class PortfolioProject extends React.Component<PortfolioProjectProps, any> {
  public render() {
    return (
        <div className="project-row">
            <div className="project-row-left">
                <TerminalImage portfolio terminalImage={this.props.terminalImage} terminalImageHeight={this.props.terminalImageHeight} terminalImageWidth={this.props.terminalImageWidth} terminalName={this.props.terminalName} terminalLink={this.props.terminalLink}/>
            </div>
            <div className="project-row-right">
                <p>{this.props.projectText}</p>
            </div>
        </div>
    );
  }
}

export default PortfolioProject;
