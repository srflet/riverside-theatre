import React, { Component, Fragment } from 'react'

//Importing the ui
import Page from './ui/Page';
import NavigationButtons from './ui/NavigationButtons';
import Heading from './ui/Heading';

export default class PersonalisedInstructions extends Component {
    state = { page: 0 }

    nextPage = () => {
        let page = this.state.page;
        page++;
        this.setState({ page: page })
    }

    previousPage = () => {
        let page = this.state.page;
        page--;
        this.setState({ page: page })
    }

    render() {
        const { round, player, stage, game } = this.props;
        const currentPage = this.state.page;

        if (stage.name == "personalised_instructions") {
            return (
                <div>
                    <Heading />
                    <Page currentPage={currentPage} round={round} player={player} game={game} />
                    <NavigationButtons currentPage={currentPage} previousPage={this.previousPage} nextPage={this.nextPage} />
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}
