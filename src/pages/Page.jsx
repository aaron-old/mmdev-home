import React, { Component } from 'react';
import PageRouter from '../components/router/PageRouter';
import UnderConstruction from './misc/UnderConstruction';
class Page extends Component {
  render() {
    let construction = process.env.REACT_APP_CONSTRUCTION;
    return construction === 'true' ? <UnderConstruction /> : <PageRouter />;
  }
}
export default Page;
