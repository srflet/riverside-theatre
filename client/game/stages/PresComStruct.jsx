import React, { Component, Fragment } from 'react';
import NextStageButton from '../general-ui/NextStageButton';
import ComStructFull from './communication-structure/ComStructFull';

export default class PresComStruct extends Component {
    render() {
        const { game, player, stage } = this.props;

        if (stage.name == "pres_com_struct") {
            return (
                <div>
                    <h2>Communication Structure</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                    </p>
                    <div className="centred">
                        <ComStructFull game={game} player={player} />
                    </div>

                    <NextStageButton player={player} game={game} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }

    }
}
