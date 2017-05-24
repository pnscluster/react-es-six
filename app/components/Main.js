// var React = require('react');
import React from 'react'

const Main = React.createClass({
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
});

// module.exports = Main;
export default Main