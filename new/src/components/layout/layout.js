import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import "../../../icons";

import "./layout.scss";


const Layout = ({children}) => {
    return(
        <>
        <Header></Header>
        <Footer></Footer>
        </>
        
    )
}
export default Layout;