import React, { Component } from 'react';
import { Centered } from "meteor/empirica:core";

//Importing UI
import PostHeader from './ui/PostHeader';
import PostPages from './ui/PostPages';

export default class PostSurvey extends Component {
    static stepName = "PostSurvey";

    state = {
        min: 1,
        max: 12,
        pageDbIndex: "exitPage"
    }

    render() {
        const { pageDbIndex, min, max } = this.state;

        return (
            <Centered>
                <PostHeader />
                <PostPages pageDbIndex={pageDbIndex} min={min} max={max} {...this.props} />
            </Centered>
        )
    }
}
