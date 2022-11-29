import styled from "styled-components";
import { useState } from "react";
const AccardeonContainer = styled.div `
    .title {
        color: #4A5759;
    }
    .content {
        font-size: 36px;
        line-height: 45px;
        overflow: hidden;
        height: 0px;
        transition: height 0.5s ease;
        padding: 0;
    }
    .content.open {
        height: 100px;
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
