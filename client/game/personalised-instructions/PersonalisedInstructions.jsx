import React, { Component, Fragment } from 'react'

//Importing the ui
import Page from './ui/Page';
import NavigationButtons from './ui/NavigationButtons';
import Heading from './ui/Heading';

export default class PersonalisedInstructions extends Component {
    state = { page: 0 }

    notificationSound = new Audio("sounds/notification.mp3")

    componentDidMount() {
        if (this.props.stage.name === "personalised_instructions") {
            this.notificationSound.play();
        }
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    nextPage = () => {
        let page = this.state.page;
        page++;
        this.setState({ page: page })
        this.scrollToTop();
    }

    previousPage = () => {
        let page = this.state.page;
        page--;
        this.setState({ page: page })
        this.scrollToTop();
    }

    render() {
        const { round, player, stage, game } = this.props;
        const currentPage = this.state.page;
        const noNav = currentPage === 2 || currentPage === 5 || currentPage === 7 || currentPage === 9;

        if (stage.name == "personalised_instructions") {
            return (
                <div>
                    <Heading currentPage={currentPage} />

                    <Page currentPage={currentPage} round={round} player={player} game={game} previousPage={this.previousPage} nextPage={this.nextPage} scrollToTop={this.scrollToTop} />

                    {noNav ? "" : <NavigationButtons currentPage={currentPage} previousPage={this.previousPage} nextPage={this.nextPage} />}
                </div>
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}
