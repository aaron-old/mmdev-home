import React from 'react';
import cn from 'classnames';
import styles from 'bootstrap/dist/css/bootstrap.css';
import footerStyles from './Footer.css';
import mustardTitle from '../../assets/img/mustard-title-v4.png';

let classes = [
  styles['fixed-bottom'],
  styles.navbar,
  footerStyles.footer,
  'bgBlackOpacity09'
];

const Footer = () => {
  return (
    <footer className={cn(classes)}>
      <div className={styles.container}>
        <a className={cn([
            footerStyles.imgAnchor,
            styles['mx-auto'],
            ['d-block']
          ])} href="/">
          <img className={styles['img-fluid']} src={mustardTitle} alt="logo"/>
        </a>
      </div>
      <ul className={styles['list-inline']}>
        <li className={styles['list-inline-item']}>
        </li>
      </ul>
    </footer>
  )
};

export default Footer;