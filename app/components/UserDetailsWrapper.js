// app/components/UserDetailsWrapper.js

// var React = require('react');
// var PropTypes = React.PropTypes;

import React, { PropTypes } from 'react'

function UserDetailsWrapper(props) {
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propType = {
  header: PropTypes.string.isRequired,
}

// module.exports = UserDetailsWrapper;
export default UserDetailsWrapper