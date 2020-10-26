import React, { Component } from 'react'

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

    getAllDemographics = () => {
        let demographics = this.props.player.get(this.state.name);
        let isDisabled = true;
        if (
            demographics.gender !== "" &&
            demographics.ethnicity !== "" &&
            demographics.age > 17 &&
            demographics.work !== ""
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
                <input
                    type="text"
                    name="ethnicity"
                    value={answers.ethnicity}
                    onChange={e => this.handleChangeEthnicity(e)}
                />
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
                <select name="work" onChange={e => this.handleChangeWork(e)} value={answers.work}>
                    <option value="">Select your answer</option>
                    <option value="less than one year">Less than one year</option>
                    <option value="one to three years">One to three years</option>
                    <option value="three years and above">Three years and above</option>
                </select>
                <br />

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={onSubmit} disabled={this.getAllDemographics()}>
                        Finish this experiment
                    </button>
                </p>
            </div>
        )
    }
}


