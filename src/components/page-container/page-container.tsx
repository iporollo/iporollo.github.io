import * as React from 'react';
import './page-container.css';

class PageContainer extends React.Component {
  public render() {
    return (
        <div className="page-container">
            {this.props.children}
        </div>
    );
  }
}

export default PageContainer;
