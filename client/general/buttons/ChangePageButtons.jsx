import React, { Component } from 'react'

export default class ChangePageButtons extends Component {

    previous = () => {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage--;
        player.set(pageDbIndex, currentPage);
    }

    next = () => {
        const { player, pageDbIndex, max } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage++;

        if (currentPage > max) {
            player.stage.submit();
        } else {
            player.set(pageDbIndex, currentPage);
        }
    }

    render() {
        const { player, pageDbIndex, min, disabledCondition, altText } = this.props;
        const nextButtonText = altText ?? "Next"

        let currentPage = player.get(pageDbIndex);

        return (
            <>
                {disabledCondition &&
                    <p style={disabledConditionMessage} className="justify-center">
                        Please answer all the questions to continue
                    </p>
                }
                <p className="button-holder">
                    <button onClick={this.previous} disabled={currentPage === min}>Previous</button>
                &emsp;
                <button onClick={this.next} disabled={disabledCondition}>{nextButtonText}</button>
                </p>
            </>
        )
    }
}

// Styling
const disabledConditionMessage = {
    fontSize: "10pt"
    , color: "red"
    , marginTop: "20px"
}