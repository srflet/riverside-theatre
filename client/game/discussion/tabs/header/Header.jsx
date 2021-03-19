import React, { Component } from 'react';
import Tab from './Tab';

// A header of the tabs with all the tabs
export default class Header extends Component {
    render() {
        const { tabsStatus, updateStatus } = this.props;

        return (
            <div className="header-tab-holder">
                <Tab status={tabsStatus.cluesTable} name={"cluesTable"} text={"Clues Table"} updateStatus={updateStatus} />
                <Tab status={tabsStatus.police} name={"police"} text={"Police Clues"} updateStatus={updateStatus} />
                <Tab status={tabsStatus.earlySub} name={"earlySub"} text={"Early submission"} updateStatus={updateStatus} />
            </div>
        )
    }
}
