import React, { Component } from 'react';
import WhodunitInput from './WhodunitInput';

export default class WhodunitQuestion extends Component {

    render() {
        return (
            <div className="whodunit-question">
                {this.props.player.get("whodunit-order").map((value, index) => <WhodunitInput key={index} handleChange={this.props.handleChange} value={value} />)}
            </div>
        )
    }
}
