import * as React from 'react';
import './terminal-image.css';

interface TerminalImageProps {
    terminalName: string;
    clickHandler?: any;
}

class TerminalImage extends React.Component<TerminalImageProps, any> {

    public constructor(props: TerminalImageProps) {
        super(props);
        this.handleImageClick = this.handleImageClick.bind(this);
    }

    private handleImageClick(e: any) {
        e.preventDefault();
        this.props.clickHandler(e);
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
        <div className="terminal-image-window">
          <div id="typed-strings" className="terminal-text">
            {/* Image */}
            {/* <p>Ivans-Portfolio: ~ $ cat about_me.txt</p>
            <p>Hello my name is Ivan Porollo and this is where I will write more about myself and this is also where more text needs to go because it needs to wrap.</p>
            <p>Ivans-Portfolio: ~ $</p> */}
          </div>
          <span id="typed"></span>
        </div>
      </div>
    );
  }
}

export default TerminalImage;
