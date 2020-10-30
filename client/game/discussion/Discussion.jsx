import React, { Component, Fragment } from 'react';

//Footer
import Footer from '../general-ui/footer/Footer';

//Tabs
import Content from './tabs/content/Content';
import Header from './tabs/header/Header';

//Importing elements for chat
import Chat from './chats/Chat';

//Importing clues tracker
import CluesCheck from './clues-check/CluesCheck';
import CluesCheckGameTip from './clues-check/CluesCheckGameTip';
import CluesCheckGameInstructions from './clues-check/CluesCheckGameInstructions';

export default class Discussion extends Component {
    state = {
        tabsStatus: {
            instructions: true,
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


