import React, { Component, Fragment } from 'react';
import NextStageButton from '../general-ui/NextStageButton';

export default class Incentives extends Component {
    render() {
        //Getting whether this is a condition with competition
        const { competitionCondition, player, stage } = this.props;

        //Only return this element if it is the appropriate stage
        if (stage.name == "incentives") {
            //Render according to the competition condition:
            if (competitionCondition === "comp") {
                //If there is competition...
                //...render page according to player:
                if (player.get("type") === "A") {
                    return (
                        <div>You are competing as player A
                            <NextStageButton player={player} />
                        </div>

                    )
                } else if (player.get("type") === "B") {
                    return (
                        <div>You are competing as player B
                            <NextStageButton player={player} />
                        </div>
                    )
                } else {
                    return (
                        <div>You are competing as player C
                            <NextStageButton player={player} />
                        </div>
                    )
                }

            } else {
                //If there isn't competition...
                //...render the same page for all:
                return (
                    <div>You are cooperating! How nice...
                        <NextStageButton player={player} />
                    </div>
                )
            }
        } else {
            return (<Fragment></Fragment>)
        }


    }
}
