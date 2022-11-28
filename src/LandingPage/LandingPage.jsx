import styled from "styled-components";
import image from "../media/images/ffce8945da70b024c6045f90b88b0670.gif";
const LandingContainer = styled.div `
    overflow: hidden;
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    color: #4A5759;
    background: black;
    overflow: hidden;
    .landingText {
        z-index: 2;
        text-align: center;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: opacity 2s ease;
    }
    .landingText h1 {
        margin: 0px;
        font-size: 128px;
        line-height: 159px;
    }
    .landingDescription h2 {
        font-size: 36px;
        line-height: 45px;
        margin: 0px;
    }

    .landingBackgroundImage img {
        opacity: 0.4;
    }
    .landingText.fadeIn {
        opacity: 1;
    }
`

function LandingPage() {

    const fadeIn = () => {
        const h1Ele = document.querySelector(".landingText");
        h1Ele.classList.add("fadeIn");
    }

    return (
        <LandingContainer onLoad={fadeIn}>
            <div className="landingWrapper">
                <div className="landingText">
                    <div className="landingHeader"><h1>Redzes Pasaule</h1></div>
                    <div className="landingDescription"><h2>Lorem ipsum is placeholder text commonly used in the graphic.</h2></div>
                </div>
                <div className="imageWrapper">
                    <div className="landingBackgroundImage">
                        <img src={image} />
                    </div>
                </div>

            </div>
        </LandingContainer>
    )
}
export default LandingPage;