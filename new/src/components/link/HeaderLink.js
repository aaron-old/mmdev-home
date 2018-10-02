import React from 'react'
import PropTypes from 'prop-types'

const HeaderLink = props => (
  <li>
    <a href={props.url}>{props.text}</a>
  </li>
)

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default HeaderLink
