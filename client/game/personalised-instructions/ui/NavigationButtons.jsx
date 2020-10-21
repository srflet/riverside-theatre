import React, { Component } from 'react'

export default class NavigationButtons extends Component {
    render() {
        const { currentPage, previousPage, nextPage } = this.props;

        return (
            <p className="button-holder">
                <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                    Previous
                </button>
                &emsp;
                <button type="button" onClick={nextPage} disabled={currentPage === 7}>
                    Next
                </button>
            </p>
        )
    }
}
