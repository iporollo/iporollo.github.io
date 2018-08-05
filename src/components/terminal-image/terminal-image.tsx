import * as React from 'react';
import './terminal-image.css';

interface TerminalImageProps {
    terminalName: string;
    terminalImage: any;
    terminalImageHeight: number;
    terminalImageWidth: number;
    terminalLink: string;
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
        <div className="terminal-image-window" onClick={this.handleImageClick}>
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
            <div className="terminal-image-container">
                <img src={this.props.terminalImage} height={this.props.terminalImageHeight} width={this.props.terminalImageWidth}/>
            </div>
        </div>
    );
  }
}

export default TerminalImage;
