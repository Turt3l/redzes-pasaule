import styled from "styled-components";
import image from "../media/images/2825710.gif";
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

    .button-6 {

    top: 20px;
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 140px;
    }

    .button-6:hover,
    .button-6:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
    }

    .button-6:hover {
    transform: translateY(-1px);
    }

    .button-6:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
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
                    <div className="landingButton"><button class="button-6" role="button">Button 6</button></div>
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