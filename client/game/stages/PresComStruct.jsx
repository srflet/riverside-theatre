import React, { Component, Fragment } from 'react';
import NextStageButton from '../general-ui/NextStageButton';
import ComStructFull from './communication-structure/ComStructFull';

export default class PresComStruct extends Component {
    render() {
        const { game, player, stage } = this.props;

        if (stage.name == "pres_com_struct") {
            return (
                <div>
                    <ComStructFull game={game} player={player} />
                    <NextStageButton player={player} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }

    }
}
