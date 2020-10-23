import React, { Component } from 'react'

export default class WhodunitQuestion extends Component {

    render() {
        return (
            <div className="whodunit-question">
                <p>Whodunit?</p>
                <input
                    type="radio"
                    name="whodunit"
                    value="Mr. X"
                    onChange={e => {
                        this.props.handleChange(e)
                    }}
                />
                <span> Mr. X</span>
                <br />

                <input
                    type="radio"
                    name="whodunit"
                    value="Mr. X's son"
                    onChange={e => {
                        this.props.handleChange(e)
                    }}
                />
                <span> Mr. X's son</span>
                <br />

                <input
                    type="radio"
                    name="whodunit"
                    value="Mrs. Y"
                    onChange={e => {
                        this.props.handleChange(e)
                    }}
                />
                <span> Mrs. Y</span>
                <br />

                <input
                    type="radio"
                    name="whodunit"
                    value="Mr. Z"
                    onChange={e => {
                        this.props.handleChange(e)
                    }}
                />
                <span> Mr. Z</span>
            </div>
        )
    }
}
