import styled from "styled-components";
const FooterContainer = styled.div `
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    background: #DEDBD2;
    overflow: hidden;
    width: 100%;
    height: 170px;

    background: #B0C4B1;

    .footer_main_text {
        font-size: 26px;
        line-height: 45px;
        text-align: center;
        
    }

    .footer_main_text p {
        color: #4A5759;

        position: relative;
        text-align: center; 
    }

    .designedby {
        font-size: 20px;
        line-height: 25px;
        
    }

    .designedby p {
        text-align: center;
        color: #929292;
    }
`

function Footer() {
    return(
        <FooterContainer>
            <div className="footer_wrapper">
                <div className="footer_main_text"><p>2022 © Redzes pasaule</p></div>
                <div className="designedby"><p>Designed by NytroByte</p></div>
            </div>
        </FooterContainer>
    )
}
export default Footer;