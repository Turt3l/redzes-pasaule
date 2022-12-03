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
        margin-bottom: 0;
        color: #4A5759;
        text-align: center;
        width: 100%;
    }
    .buiWrap {
        margin: 0 200px 0 200px;
        display: flex;
        flex-wrap: wrap;
    }

    .buiwrap h2 {
        font-weight: 700;
        font-size: 8vh;
    }
    .col {
        margin-bottom: 20px;
        cursor: pointer;
    }
    .descriptionTextContainer {
        width: 100%;
        padding-bottom: 50px;
        font-weight: 500;
        font-size: 30px;
        text-align: center;
        color: #4A5759;
        font-family: 'Scada';
    }
`
function Bui() {

    return (
        <BuiContainer>
            <div className="buiWrap">
                <h2>Biežāk uzdotie jautājumi</h2>
                <div className="descriptionTextContainer">
                    <p>Šeit ir atbildes uz uzdotākājiem jautājumiem</p>
                </div>
                <div className="row">
                    <div className="col">
                        <Accordion content="Lorem Ipsum is simply dummy text" header="jautājums 1" />
                    </div>
                    <div className="col">
                        <Accordion content="Lorem Ipsum is simply dummy text" header="jautājums 2" />
                    </div>
                    <div className="col">
                        <Accordion content="Lorem Ipsum is simply dummy text" header="jautājums 3" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Accordion content="Lorem Ipsum is simply dummy text" header="jautājums 4" />
                    </div>
                    <div className="col">
                        <Accordion content="Lorem Ipsum is simply dummy text" header="jautājums 5" />
                    </div>
                    <div className="col">
                        <Accordion content="Lorem Ipsum is simply dummy text" header="jautājums 6`" />
                    </div>
                </div>
            </div>
        </BuiContainer>
    )
}
export default Bui;