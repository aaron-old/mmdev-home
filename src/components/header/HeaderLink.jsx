import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from 'bootstrap/dist/css/bootstrap.css';
import headerStyles  from './Header.css';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const HeaderLink = (props) => {
  return (
    <li className={cn([
      styles['nav-item'],
      headerStyles.headerNavItem
    ])}>
      <a href={props.url}
         className={styles['nav-link']}>
        {props.text}
        </a>
    </li>
  )
};

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // active: PropTypes.bool.isRequired
};

export default HeaderLink;
