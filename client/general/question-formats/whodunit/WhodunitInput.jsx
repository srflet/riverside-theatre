import React, { Component, Fragment } from 'react'

export default class WhodunitInput extends Component {
    render() {
        return (
            <Fragment>
                <input
                    type="radio"
                    name="whodunit"
                    value={this.props.value}
                    onChange={e => {
                        this.props.handleChange(e)
                    }}
                />
                <span> {this.props.value}</span>
                <br />
            </Fragment>
        )
    }
}
