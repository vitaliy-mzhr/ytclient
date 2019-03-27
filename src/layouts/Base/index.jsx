import React from 'react';
import { Container } from 'semantic-ui-react';

import TopNavigationBar from '../../components/TopNavigationBar';

class BaseLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <TopNavigationBar />
        <Container textAlign={"center"}>
          {children}
        </Container>
      </>
    )
  }
}

export default BaseLayout;
