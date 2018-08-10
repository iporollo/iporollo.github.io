import * as React from 'react';
import './terminal-image.css';

interface TerminalImageProps {
    terminalName: string;
    terminalLink: string;
    portfolio?: boolean;
    reactDash?: boolean;
    svg?: any;
    terminalImage?: any;
    terminalImageHeight?: number;
    terminalImageWidth?: number;
}

class TerminalImage extends React.Component<TerminalImageProps, any> {

    public constructor(props: TerminalImageProps) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    private handleImageClick(e: any) {
        e.preventDefault();
        window.open(this.props.terminalLink, '_blank');

    }

  public render() {
    return (
        <div className={"terminal-image-window" + (this.props.portfolio ? " terminal-portfolio" : "")} onClick={this.handleImageClick}>
            <header>
            <div className="terminal-image-buttons">
                <div className="red_btn button"></div>
                <div className="green_btn button"></div>
                <div className="yellow_btn button"></div>
            </div>
            <div className="terminal-image-center">
                <div className="terminal-image-name">{this.props.terminalName}</div>
            </div>
            <div></div>
            </header>
            <div className={("terminal-image-container " + (this.props.reactDash ? "no-top-margin" : ""))}>
                {this.props.svg ? 
                    this.props.svg
                :
                    this.props.reactDash ? 
                        <img src={this.props.terminalImage} className="react-dash-img"/>
                    :
                        <img src={this.props.terminalImage} height={this.props.terminalImageHeight} width={this.props.terminalImageWidth}/>
                }
            </div>
        </div>
    );
  }
}

export default TerminalImage;
