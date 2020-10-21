import React, { Component } from 'react'

export default class Matrix extends Component {

    handleSubmit = e => {
        e.preventDefault();
    }

    handleChange = e => {
        let radio = e.currentTarget;
        let answers = typeof this.props.player.get(this.props.playerVariable) !== "undefined" ?
            this.props.player.get(this.props.playerVariable) :
            {};

        if (radio.checked) {
            answers[radio.name] = radio.value;
            this.props.player.set(this.props.playerVariable, answers);
        }

    }

    render() {
        const { player, playerVariable, questions, responseScale } = this.props;

        let answers = player.get(playerVariable);

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table>
                        <thead>
                            <tr>
                                <th>Questions</th>
                                {responseScale.map((response, index) => <th key={index}>{response}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, index) => {
                                return <tr key={index}>
                                    <td key={index}>{question}</td>
                                    {responseScale.map((response, index) => {
                                        return <td key={index}>
                                            <input
                                                key={index}
                                                type="radio"
                                                name={question}
                                                value={response}
                                                checked={typeof answers !== "undefined" ? answers[question] === response : false}
                                                onChange={e => {
                                                    this.handleChange(e)
                                                }}
                                            />
                                        </td>
                                    })}
                                </tr>
                            })}
                        </tbody>
                    </table>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
