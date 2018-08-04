import * as React from 'react';
import Navbar from "../navbar/navbar";
import './wrapper.css';

class Wrapper extends React.Component {
  public render() {
    return (
        <div className="wrapper">
            <Navbar/>
            <div>
                {this.props.children}
            </div>  
        </div>
    );
  }
}

export default Wrapper;
