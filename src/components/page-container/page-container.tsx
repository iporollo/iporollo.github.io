import * as React from 'react';
import Wrapper from '../wrapper/wrapper';
import './page-container.css';

class PageContainer extends React.Component {
  public render() {
    return (
      <Wrapper>
        <div className="page-container">
            {this.props.children}
        </div>
      </Wrapper>
    );
  }
}

export default PageContainer;
