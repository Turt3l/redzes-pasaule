import styled from "styled-components";
import { useState } from "react";
const AccardeonContainer = styled.div `
cursor: pointer;
transition: box-shadow 0.5s;
border-radius: 25px;
padding: 10px;
    .title {
        color: #4A5759;
    }

    &:hover {
        box-shadow: 0px 4px 35px #a8acb0;
    }
    .content {
        margin: 15px 0 0 20px;
        font-size: 36px;
        line-height: 45px;
        overflow: hidden;
        height: 0px;
        transition: height 0.5s ease;
        padding: 0;
    }
    .content.open {
        height: 200px;
    }

`
export default function Accordion(props) {
    const [isActive, setIsActive] = useState(false);
    return(
        <AccardeonContainer>
            <div className="title" onClick={() => setIsActive(!isActive)}>
                {props.header}
            </div>
            <div className={`content ${isActive ? "open" : "closed"}`}>
                {props.content}
            </div>
        </AccardeonContainer>
    )
}
