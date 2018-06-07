import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import Page from './pages/Page';
class App extends Component {
  render() {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  }
}

export default App;
