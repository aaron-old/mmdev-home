import React from 'react';
import cn from 'classnames';
import styles from 'bootstrap/dist/css/bootstrap.css';
import footerStyles from './Footer.css';
import mustardTitle from '../../assets/img/mustard-title-v4.png';
import SocialButton from "../button/SocialButton/SocialButton";

let classes = [
  styles['fixed-bottom'],
  styles.navbar,
  footerStyles.footer,
  'bgBlackOpacity09'
];


const Footer = () => {
  return (
    <footer className={cn(classes)}>
      <section className={cn([styles.container, footerStyles.section])}>
        <a className={cn([
            footerStyles.imgAnchor,
            styles['mx-auto']
          ])} href="/">
          <img className={styles['img-fluid']} src={mustardTitle} alt="logo"/>
        </a>
        <ul className={styles['list-inline']}>
          <li className={styles['list-inline-item']}>
            <SocialButton type='facebook' url="https://www.facebook.com/M240B"/>
          </li>
          <li className={styles['list-inline-item']}>
            <SocialButton type='twitter' url='https://twitter.com/MustardmanYoung'/>
          </li>
          <li className={styles['list-inline-item']}>
            <SocialButton type='github' url='https://github.com/aaron-old'/>
          </li>
        </ul>
        <hr className={footerStyles.row}/>
        <p className={footerStyles.rights}>
          {new Date().getFullYear()} All rights reserved. Mustardman Developments
        </p>
      </section>
    </footer>
  )
};

export default Footer;