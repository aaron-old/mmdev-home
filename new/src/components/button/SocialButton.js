import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = (props) => {
    return (
        <a href={props.url}>
            <span>
                <FontAwesomeIcon icon={['fab', `${props.type}`]} size="2x"/>
            </span>
        </a>
    )
}

// todo get the size as a default size of 2x

SocialButton.propTypes = {
    shape: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    fontSize: PropTypes.string,
    url: PropTypes.string
}

export default SocialButton;