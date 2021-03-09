import React, { Component } from 'react'
import Header from './header/Header'
import Content from './content/Content'

export default class Tabs extends Component {
    state = {
        tabsStatus: {
            cluesTable: true,
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

    render() {
        const { tabsStatus } = this.state;

        return (
            <div>
                <Header tabsStatus={tabsStatus} updateStatus={this.updateStatus} />
                <Content tabsStatus={tabsStatus} {...this.props} />
            </div>
        )
    }
}
