// app/containers/MainContainer.js

// var React = require('react');
// var styles = require('../styles');

import React from 'react'
import * as styles from '../styles'

function MainContainer(props) {
    return (
        <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
            {props.children}
        </div>
    )
}

// module.exports = MainContainer;
export default MainContainer