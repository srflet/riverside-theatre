import React, { Component, Fragment } from 'react';

//Footer
import Footer from '../../general/footer/Footer';

//Tabs
import Content from './tabs/content/Content';
import Header from './tabs/header/Header';

//Importing elements for chat
import Chat from './chats/Chat';

//Importing clues tracker
import CluesCheck from '../../general/clues/CluesCheck';
import CluesCheckGameInstructions from '../../general/clues-check/CluesCheckGameInstructions';
import CluesCheckGameTip from '../../general/clues-check/CluesCheckGameTip';
import PresComStructTip from '../personalised-instructions/pages/subpage-elements/PresComStructTip';

export default class Discussion extends Component {
    state = {
        tabsStatus: {
            instructions: false,
            police: false,
            comStruct: false,
            earlySub: false
        }
    }

    updateStatus = name => {
        let tabsStatus = this.state.tabsStatus;
        let tabs = Object.keys(tabsStatus);

        tabs.forEach(tab => {
            if (tab === name) {
                tabsStatus[tab] = !tabsStatus[tab];
            } else {
                tabsStatus[tab] = false
            }
        })

        this.setState({ tabsStatus: tabsStatus });
    }

    clickOutsideInformation = () => {
        this.setState({
            tabsStatus: {
                instructions: false,
                police: false,
                comStruct: false,
                earlySub: false
            }
        });
    }

    render() {
        const { round, game, player, stage } = this.props;

        if (stage.name == "discussion") {
            return (
                <div>
                    <div className="footer">
                        <Footer game={game} player={player} stage={stage} />
                    </div>
                    <br />
                    <p>
                        On this page you will find tabs to revisit important game information, and at the bottom of the page, you will find chat boxes to send messages to the other players (according to the communication structure shown to you).
                    </p>
                    <div>
                        <Header tabsStatus={this.state.tabsStatus} updateStatus={this.updateStatus} />
                        <Content tabsStatus={this.state.tabsStatus} player={player} round={round} game={game} stage={stage} />
                    </div>
                    <br />
                    <div>
                        <CluesCheckGameInstructions />
                        <br />

                        <CluesCheck round={round} game={game} player={player} />
                        <br />

                        <CluesCheckGameTip />
                        <br />
                        <PresComStructTip />

                        <div style={chatHolder}>
                            <Chat round={round} game={game} player={player} chatNb={1} />
                            <Chat round={round} game={game} player={player} chatNb={2} />
                            {game.treatment.brokerage !== "brok" ? <Chat round={round} game={game} player={player} chatNb={3} /> : ""}
                        </div>

                    </div>
                </div >
            )
        } else {
            return (<Fragment></Fragment>)
        }
    }
}


//Style variables
const informationHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "2rem",
    flexWrap: "wrap",
};

const chatHolder = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "2rem",
    flexWrap: "wrap",
};


