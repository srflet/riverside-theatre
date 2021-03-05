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
        const { player, pageDbIndex, min, disabledCondition } = this.props;

        let currentPage = player.get(pageDbIndex);

        return (
            <p className="button-holder">
                <button onClick={this.previous} disabled={currentPage === min}>Previous</button>
                &emsp;
                <button onClick={this.next} disabled={disabledCondition}>Next</button>
            </p>
        )
    }
}
