import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import cn from 'classnames';
import styles from 'bootstrap/dist/css/bootstrap.css';
const Layout = props => (
  <div className={cn('main', styles['container-fluid'])}>
    <Header/>
    {props.children}
    <Footer/>
  </div>
);
export default Layout;
