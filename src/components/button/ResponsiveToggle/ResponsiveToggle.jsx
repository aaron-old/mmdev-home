import React from 'react';
import cn from 'classnames';
import styles from 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ResponsiveToggle = (props) => {
  return (
    <button className={cn([styles['navbar-toggler']])}
            onClick={props.onClick}
            type="button"
            data-toggle="collapse"
            data-target={`#${props.navId}`}
            aria-controls={`#${props.navId}`}
            aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={['fas', 'bars']}/>
    </button>
  )
};

export default ResponsiveToggle;