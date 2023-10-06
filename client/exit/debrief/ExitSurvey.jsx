import React, { Component } from 'react';

export default class ExitSurvey extends Component {
  static stepName = "ExitSurvey";
  state = { feedback: "" };

  handleChange = e => {
    const { player } = this.props;
    const text = e.currentTarget.value
    this.setState({ feedback: text });
    player.set("feedback", text);

  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    const { player, onSubmit } = this.props;
    const { feedback } = this.state;

    return (
            <div>
                <h3 >Debrief and feedback</h3>
            <p  >
                Thank you for participating in this study! The intent of this research is to study how teams communicate with each other and engage in innovative tasks.
            </p>
            <p >
              Please allow us 5 business days to process your basic compensation ($12).
            </p>
            <p >
              At the end of the study, the top 3 scoring teams will be awarded $150 to be split between the two team members whereas the rest of the top 10 will be awarded $50.
              
            </p>
            <p >
            Please allow us 4 business weeks to calculate all teams scores and process bonus payments.
            </p>

            <p>
              If you are interested in participating in similarly engaging, interesting studies like this, we at UCL School of Management have a mailing list that routinely advertise future studies. If you would like to join, please click here <a href="https://tinyurl.com/mr44v5au">https://tinyurl.com/mr44v5au</a>.
            </p>

            <p >
              If you have any further questions please reach out to our Prolific account.
            </p>

            <div className="button-holder">
              <button className="main-btn" onClick={() => { window.location = "https://app.prolific.co/submissions/complete?cc=412B541B" }}>
                  Submit and return to Prolific
            </button>
				</div>
            
            </div>

            

    );
  }
}