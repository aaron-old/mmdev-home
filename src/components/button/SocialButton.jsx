import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';


const SocialButton = (props) => {

  let iconClass = ['fas'];

  return (
    <a href={props.url}>
      <i></i>
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