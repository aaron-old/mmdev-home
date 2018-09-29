import React, { Component } from "react";
import cn from "classnames";
import styles from "bootstrap/dist/css/bootstrap.css";
import headerStyles from "./Header.css";
import logo from "../../assets/img/logo.png";

import HeaderLink from "./HeaderLink";
import ResponsiveToggle from "../button/ResponsiveToggle/ResponsiveToggle";

/**
 *
 */
class Header extends Component {
  constructor(props) {
    super(props);
    this.navId = "bannerNavigation";
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  
  render() {
    return (
      <header className={cn([headerStyles.header])}>
        <section className={headerStyles.headerSection}>
          <nav
            id={this.navId}
            className={cn([styles.navbar, styles["navbar-expand-md"]])}
          >
            <ResponsiveToggle navId={this.navId} onClick={this.toggle} />
            <div className={styles.container}>
              <div
                id="navbar"
                className={cn([
                  styles.collapse,
                  styles["navbar-collapse"],
                  styles["align-items-center"],
                  styles["flex-sm-row"]
                ])}
              >
                <a href="/" className={styles["navbar-brand"]}>
                  <img
                    height="30"
                    width="30"
                    src={logo}
                    className={styles["img-fluid"]}
                    alt="logo"
                  />
                </a>
                <ul
                  className={cn([
                    styles["navbar-nav"],
                    styles["text-uppercase"],
                    styles["ml-auto"],
                    headerStyles.headerNavbarNav
                  ])}
                >
                  <HeaderLink url="/" text="Home" />
                  <HeaderLink url="#about" text="About" />
                  <HeaderLink url="#resume" text="Resume" />
                  <HeaderLink url="#contact" text="Contact" />
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </header>
    );
  }
}

export default Header;
