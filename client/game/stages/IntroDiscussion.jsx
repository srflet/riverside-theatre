import React, { Component, Fragment } from 'react';
import NextStageButton from '../general-ui/NextStageButton';

export default class IntroDiscussion extends Component {
    render() {
        const { player, stage } = this.props;

        if (stage.name == "intro_discussion") {
            return (
                <div>
                    Here are the instructions for the discussion
                    <NextStageButton player={player} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}
