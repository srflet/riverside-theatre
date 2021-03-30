import React, { Component } from 'react'
// The tabs
import Header from './header/Header'
// The contents of the tabs
import Content from './content/Content'

export default class Tabs extends Component {

    // Which tab is open or not, with the cluesTable open by default
    state = {
        tabsStatus: {
            competitionStructure: true,
            cluesTable: false,
            police: false,
            earlySub: false
        }
    }

    // Update the status of the tabs based on the tab that is clicked
    updateStatus = name => {

        // Get every possible tab
        let tabsStatus = this.state.tabsStatus;
        let tabs = Object.keys(tabsStatus);

        // For each tab, set the one clicked to the opposite of what it was
        // Open if closed, closed if open
        // And set the others to closed
        tabs.forEach(tab => {
            if (tab === name) {
                tabsStatus[tab] = !tabsStatus[tab];
            } else {
                tabsStatus[tab] = false
            }
        })

        // Set these statuses back to the component state
        this.setState({ tabsStatus: tabsStatus });
    }

    render() {
        // Provide the statuses down to the elements of the tabs
        const { tabsStatus } = this.state;

        return (
            <div>
                <Header tabsStatus={tabsStatus} updateStatus={this.updateStatus} />
                <Content tabsStatus={tabsStatus} {...this.props} />
            </div>
        )
    }
}
