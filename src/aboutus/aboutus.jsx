import styled from "styled-components";
const Aboutuscontainer = styled.div `
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    width: 100%;
    height: 100vh;
    display: flex;

    .aboutus_container {
        width: 100%;
        padding: 0 200px 0 200px;
    }

    .header_text {
        font-weight: 700;
        font-size: 8vh;
        line-height: 119px;
        color: #4A5759;

        width: 100%;
        text-align: center;
    }

    .aboutus_paragraph {
        font-weight: 400;
        font-size: 32px;
        line-height: 40px;
        color: #000000;
        width: 30%;
    }

`

function AboutUs() {
    return (
        <Aboutuscontainer>
            <div className="aboutus_container">
                <div className="header_text">
                    <p>Kas ir Redzes Pasaule?</p>
                </div>
                <div className="aboutus_paragraph">
                    <p>Lorem ipsum is placeholder 
                    text commonly used in the graphic, 
                    print, and publishing industries for 
                    previewing layouts and visual mockups.</p>
                </div>
            </div>
        </Aboutuscontainer>
    )
}

export default AboutUs;