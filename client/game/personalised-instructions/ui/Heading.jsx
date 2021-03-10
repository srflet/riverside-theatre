import React, { Component } from 'react';
import Timer from '../../../general/timer/Timer';
import { MyProfile } from '../../../general/information-line/InformationLine'

export default class Heading extends Component {
    render() {
        const { currentPage, max, player, stage } = this.props;

        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <MyProfile player={player} hideCheck={true} />
                    <Timer stage={stage} />
                    <div>
                        <p><strong>Page:</strong></p>
                        <p style={{ textAlign: "center" }}>{currentPage} / {max}</p>
                    </div>
                </div>
            </div>
        )
    }
}