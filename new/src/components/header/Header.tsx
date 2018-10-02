import React, { Component } from "react";
import HeaderLink from "../link/HeaderLink";

import headerStyles from "./header.module.scss";
import logo from "../../images/logo.png";

interface IState {
  isOpen: boolean;
}

interface IProps {}

interface NavigationLink {
  url: string;
  text: string;
}

const navigation: Array<NavigationLink> = [
  {
    url: "/",
    text: "home",
  },
  {
    url: "#about",
    text: "about",
  },
  {
    url: "#resume",
    text: "resume",
  },
  {
    url: "#contact",
    text: "contact",
  },
];

class Header extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <header>
        <nav>
          <div className={headerStyles.collapse}>
            <div>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <ul>
              {navigation.map(item => (
                <HeaderLink url={item.url} text={item.text} />
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
