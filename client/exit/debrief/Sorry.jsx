import React, { Component } from 'react'

export default class Sorry extends Component {
    static stepName = "Sorry";
    render() {
        return (
            <div className="centered">
                <p>
                    We are very sorry, there seems to be a problem. Either you have already participated in this study, or there was a problem with the study from our side. If you have any questions please contact the researchers.
                </p>
            </div >
        )
    }
}
