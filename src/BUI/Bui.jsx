import styled from "styled-components";
import { Children, useState } from "react";
import Accordion from "./Accordeon";
const BuiContainer = styled.div `
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 60px;
    .row {
        width: calc(50% - 50px);
        padding-right: 50px;
    }
    h2 {
        color: #4A5759;
        text-align: center;
        width: 100%;
    }
    .buiWrap {
        margin: 0 200px 0 200px;
        display: flex;
        flex-wrap: wrap;
    }
    .col {
        margin-bottom: 20px;

        cursor: pointer;
    }
`
function Bui() {

    return (
        <BuiContainer>
            <div className="buiWrap">
                <h2>Biežāk uzdotie jautājumi</h2>
                <div className="row">
                    <div className="col">
                        <Accordion content="loti mega kaka" header="kakucis loti mizligs vai mazins?" />
                    </div>
                    <div className="col">
                        <Accordion content="kakucs" header="kakucis" />
                    </div>
                    <div className="col">
                        <Accordion content="kakucs" header="kakucis" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Accordion content="kakucs" header="kakucis" />
                    </div>
                    <div className="col">
                        <Accordion content="kakucs" header="kakucis" />
                    </div>
                    <div className="col">
                        <Accordion content="kakucs" header="kakucis" />
                    </div>
                </div>
            </div>
        </BuiContainer>
    )
}
export default Bui;