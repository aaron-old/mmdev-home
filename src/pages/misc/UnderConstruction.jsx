import React from 'react';
import cn from 'classnames';
import styles from './UnderConstruction.css';
import gears from './gears.svg';

let classes = cn(styles.background, styles.warningContent, styles.body);
let innerHeight = window.innerHeight;
const UnderConstruction = () => (
  <div className={classes} style={{height: `${innerHeight}px`}}>
    <h1>New Site Under Construction</h1>
    <img src={gears} alt="gears"/>
    <p>
      Please forgive the inconvenience. <br />
      We are currently initializing our brand new site.
    </p>
    <p>
      It's okay, we're excited too!
    </p>
  </div>
);
export default UnderConstruction;

