import styled from "styled-components";
import image from "../media/images/wp3365325.jpg";
const LandingContainer = styled.div `
    overflow: hidden;
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    color: #4A5759;
    
    background: black;
    overflow: hidden;
    .landingText {
        text-align: center;
        position: absolute;
        color: white;
        overflow: hidden;
    }
    .landingHeader h1 {
        font-size: 128px;
        line-height: 159px;
    }
    .landingDescription h2 {
        font-size: 36px;
        line-height: 45px;
    }

    .landingBackgroundImage img {
        object-fit: cover;
        opacity: 0.4;
    }
`

function LandingPage() {
    return (
        <LandingContainer>
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