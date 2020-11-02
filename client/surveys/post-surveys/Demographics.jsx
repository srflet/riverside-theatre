import React, { Component } from 'react';
import PostBottonTip from '../../exit/post-survey/ui/PostButtonTip';

export default class Demographics extends Component {
    state = {
        name: "Demographics"
    }

    handleChangeGender = e => {
        let demographics = this.props.player.get(this.state.name);
        demographics.gender = e.currentTarget.value;
        this.props.player.set(this.state.name, demographics);
    }

    handleChangeEthnicity = e => {
        let demographics = this.props.player.get(this.state.name);
        demographics.ethnicity = e.currentTarget.value;
        this.props.player.set(this.state.name, demographics);
    }

    handleChangeAge = e => {
        let demographics = this.props.player.get(this.state.name);
        demographics.age = e.currentTarget.value;
        this.props.player.set(this.state.name, demographics);
    }

    handleChangeWork = e => {
        let demographics = this.props.player.get(this.state.name);
        demographics.work = e.currentTarget.value;
        this.props.player.set(this.state.name, demographics);
    }

    handleChangeComment = e => {
        let demographics = this.props.player.get(this.state.name);
        demographics.comment = e.currentTarget.value;
        this.props.player.set(this.state.name, demographics);
    }

    getAllDemographics = () => {
        let demographics = this.props.player.get(this.state.name);
        let isDisabled = true;
        if (
            demographics.gender !== "" &&
            demographics.ethnicity !== "" &&
            demographics.age > 17
        ) {
            isDisabled = false;
        }

        return isDisabled
    }

    render() {
        const { player, currentPage, previousPage, nextPage, onSubmit } = this.props;

        const answers = player.get(this.state.name);

        return (
            <div>
                <p>Please indicate your gender</p>
                <select name="gender" onChange={e => this.handleChangeGender(e)} value={answers.gender}>
                    <option value="">Select your answer</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <br />

                <p>Please indicate your ethnicity</p>
                <select name="ethnicity" value={answers.ethnicity} onChange={e => this.handleChangeEthnicity(e)}>
                    <option value="">Select your answer</option>
                    <option value="White">White</option>
                    <option value="Hispanic or Latino">Hispanic or Latino</option>
                    <option value="Black or African American">Black or African American</option>
                    <option value="Asian/Pacific Islander">Asian/Pacific Islander</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <br />

                <p>Please indicate your age</p>
                <input
                    type="number"
                    name="age"
                    min="18"
                    max="75"
                    size="20"
                    value={answers.age}
                    onChange={e => this.handleChangeAge(e)}
                />
                <br />
                <br />

                <p>Please indicate your number of years of working experience</p>
                <p style={{ color: "grey" }}>If you have been working less than 6 months round down to 0, if you have been working more than 6 months round up to 1</p>
                <input
                    type="number"
                    name="work"
                    min="0"
                    max="99"
                    size="20"
                    value={answers.work}
                    onChange={e => this.handleChangeWork(e)}
                />
                <br />
                <br />

                <p>If you have any additional comments about the game, please write them here:</p>
                <textarea name="comment"
                    autoComplete="off"
                    value={answers.comment}
                    onChange={e => this.handleChangeComment(e)}
                    style={{ width: "500px", height: "200px" }}></textarea>
                <br />
                <br />

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={onSubmit} disabled={this.getAllDemographics()}>
                        Finish this experiment and see who the guilty person is
                    </button>
                </p>
                <PostBottonTip />
            </div>
        )
    }
}


