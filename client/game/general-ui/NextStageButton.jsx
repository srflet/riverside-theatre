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
                {this.props.player.stage.submitted
                    ? <button onClick={this.endStage} disabled>Next Stage</button>
                    : <button onClick={this.endStage}>Next Stage</button>
                }
            </div>
        )
    }
}

