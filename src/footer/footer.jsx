import styled from "styled-components";
import picture from "../media/images/nytrobyte_logo.png"
const FooterContainer = styled.div `
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    overflow: hidden;
    width: 100%;
    height: 170px;
    background: #1B1C23;

    display: flex; 
    flex-direction: column;

    .footer_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;

        height: 100%;
    }

    .footer_designedby {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
    }

    .footer_main_text {
        height: auto;
    }

    .footer_main_text p {
        font-size: 3vh;
        color: #929292;
    }

    .designedby {
        height: auto;

        margin-top: auto;
    }

    .designedby p {
        font-size: 1.6vh;
        opacity: 0.7;
        color: #929292;

        float: left;

    }

    #logonytrobyte {
        width: 80px;
        height: auto;

        float: right;
        transform: translateY(50%);

        padding-left: 0.5vh;
    }
    
`

function Footer() {
    return(
        <FooterContainer>
            <div className="footer_wrapper">
                <div className="footer_main_text"><p>2022 © Redzes pasaule</p></div>
            </div>
            <div className="footer_designedby">
                <div className="designedby"><p>Designed by </p><img id="logonytrobyte" src={picture}/></div>
            </div>
        </FooterContainer>

        
    )
}
export default Footer;