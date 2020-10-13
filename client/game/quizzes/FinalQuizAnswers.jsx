import React, { Component, Fragment } from 'react';
import NextStageButton from '../general-ui/NextStageButton';

export default class FinalQuizAnswers extends Component {
    render() {
        const { player, stage, game } = this.props;

        if (stage.name == "final_quiz_answers") {
            return (
                <div>
                    <h2>Quiz - Answers</h2>
                    <p>Your answer was: {player.get("whodunit")}</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet molestie ante ut placerat. Curabitur nec velit arcu. Proin sagittis porta ligula sit amet feugiat. Nunc molestie pharetra orci, a tristique tortor. Sed sodales risus at sapien ultricies scelerisque. Fusce id ornare diam, eu efficitur ipsum. Vivamus eleifend maximus lectus eget semper. Aenean vel velit non mauris rutrum suscipit a sollicitudin metus. Fusce pharetra ac purus ac interdum. In posuere mattis ultrices. Mauris sed laoreet ipsum.
                    </p>
                    <NextStageButton player={player} game={game} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}