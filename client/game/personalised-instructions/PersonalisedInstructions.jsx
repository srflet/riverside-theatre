import React, { Component } from 'react'

// Importing the ui
import Page from './ui/Page';
import Heading from './ui/Heading';
import ChangePageButtons from '../../general/buttons/ChangePageButtons';

export default class PersonalisedInstructions extends Component {
    state = {
        min: 1,
        pageDbIndex: "personalisedDiscussionPage"
    }

    notificationSound = new Audio("sounds/notification.mp3")

    componentDidMount() {
        this.notificationSound.play();
    }

    scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    render() {
        const { player } = this.props;
        const { pageDbIndex, min } = this.state;
        let currentPage = player.get(pageDbIndex);

        return (
            <div>
                <Heading currentPage={currentPage} {...this.props} />

                <Page currentPage={currentPage} scrollToTop={this.scrollToTop} {...this.props} />

                <ChangePageButtons player={player} pageDbIndex={pageDbIndex} min={min} />
            </div>
        )
    }
}
