import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "bootstrap/dist/css/bootstrap.css";
const Layout = props => (
  <section className="main">
    <Header />
    <section id="content" className={styles.container}>
      {props.children}
    </section>
    <Footer />
  </section>
);
export default Layout;
