import React, { Component } from 'react';

export default class NextStageButton extends Component {

    //Method that ends the stage
    endStage = () => {
        //End this stage for this player
        this.props.player.stage.submit();
    }

    render() {
        return (
            <div className="button-holder">
                <button onClick={this.endStage} disabled={this.props.player.stage.submitted}>Next Stage</button>
            </div>
        )
    }
}

