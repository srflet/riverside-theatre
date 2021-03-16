import React, { Component } from 'react'

// Importing the ui
import Page from './ui/Page';
import Heading from './ui/Heading';

export default class PersonalisedInstructions extends Component {
    state = {
        min: 1,
        max: 10,
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
        const { pageDbIndex, min, max } = this.state;
        let currentPage = player.get(pageDbIndex);

        return (
            <div>
                <Heading currentPage={currentPage} max={max} {...this.props} />

                <Page pageDbIndex={pageDbIndex} min={min} max={max} scrollToTop={this.scrollToTop} {...this.props} />
            </div>
        )
    }
}
