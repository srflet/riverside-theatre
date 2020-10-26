import React, { Component } from 'react';

//Importing UI
import PostHeader from './ui/PostHeader';
import PostPages from './ui/PostPages';

export default class PostSurvey extends Component {
    static stepName = "PostSurvey";

    state = {
        page: 0,
    }

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
        const { player, game, onSubmit } = this.props;
        const currentPage = this.state.page;

        return (
            <div>
                <PostHeader />
                <PostPages currentPage={currentPage} player={player} game={game} previousPage={this.previousPage} nextPage={this.nextPage} onSubmit={onSubmit} />
            </div>
        )
    }
}
