import React, { Component } from 'react';
import NextStageButton from '../../general-ui/NextStageButton';
import ComStructFull from '../../communication-structure/ComStructFull';

export default class PresComStruct extends Component {
    render() {
        const { round, game, player } = this.props;

        return (
            <div>
                <h3>Communication Structure</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                    </p>
                <div className="centred">
                    <ComStructFull round={round} game={game} player={player} />
                </div>

                <NextStageButton player={player} game={game} />
            </div>
        )
    }
}
