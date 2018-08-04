import * as React from 'react';
import './navbar.css';
import Typist from "react-typist";
import 'react-typist/dist/Typist.css'

class Navbar extends React.Component {
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
                <a href="/" style={{textDecoration: "underline"}}>About</a>
                <a href="/experience">Experience</a>
                <a href="/portfolio">Portfolio</a>
                <a href="javascript:void(0)">Freelance</a>
            </div>
        </header>
    );
  }
}

export default Navbar;
