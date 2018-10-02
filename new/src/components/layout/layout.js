import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import "../../../icons";

import "./layout.scss";
import layoutStyles from '../../layout.module.scss';


const Layout = ({children}) => {
    return(
        <div className={layoutStyles.containerFluid}>
            <Header></Header>
            <Footer></Footer>
        </div>
        
    )
}
export default Layout;