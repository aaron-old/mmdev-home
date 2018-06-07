import React from 'react';
import { Container } from 'reactstrap';
const Layout = props => (
  <Container fluid className="main">
    {props.children}
  </Container>
);
export default Layout;
