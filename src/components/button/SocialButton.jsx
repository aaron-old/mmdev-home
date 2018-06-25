import React from 'react';
import PropTypes from 'prop-types';
import buttonCss from './SocialButton.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * @summary Used to create social button given an identifier and url.
 * @param props
 * @param props.shape
 * @param props.size
 * @param props.type
 * @param props.fontSize
 * @param props.url
 * @returns {SocialButton}
 * @constructor
 */
const SocialButton = (props) => {


  return (
    <a href={props.url} className={buttonCss.socialButton}>
      <span className={buttonCss.socialButtonIcon}>
        <FontAwesomeIcon icon={['fab', `${props.type}`]} size="2x"/>
      </span>
    </a>
  )
};


SocialButton.propTypes = {
  shape: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  fontSize: PropTypes.string,
  url: PropTypes.string
};
export default SocialButton;