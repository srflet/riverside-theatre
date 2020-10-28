import React, { Component } from 'react'

export default class Tab extends Component {
    render() {
        const { status, name, text, updateStatus } = this.props;

        return (
            <div className="tab" onClick={() => updateStatus(name)}>
                {text}{" "}{status ? <span>&and;</span> : <span>&or;</span>}
            </div>
        )
    }
}
