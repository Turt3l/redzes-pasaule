import styled from "styled-components";
const AboutContainer = styled.div `

margin: 0 200px 0 200px;
    .aboutPoints {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    .headerContainer h3{
        font-weight: 700;
        font-size: 8vh;
        line-height: 119px;
        text-align: center;
        color: #4A5759;
        font-family: 'Scada';
    }
    .pointImage {
        display: inline-block;
        width: 180px;
        height: 180px;
        background-color: black;
        border-radius: 120px;
    }
    .point {
        text-align: center;
        width: 20%;
    }
    .pointText {
        padding-top: 20px;
    }

`
function About() {
    return (
        <AboutContainer>
            <div className="aboutWrap">
                <div className="aboutRow">
                    <div className="headerContainer">
                        <h3>Ko mēs piedāvājam?</h3>
                    </div>
                    <div className="aboutPoints">
                        <div className="point">
                            <div className="pointImage"></div>
                            <div className="pointText">
                                Daudz ko
                            </div>
                        </div>
                        <div className="point">
                            <div className="pointImage"></div>
                            <div className="pointText">
                                Daudz ko
                            </div>
                        </div>
                        <div className="point">
                            <div className="pointImage"></div>
                            <div className="pointText">
                                Daudz ko
                            </div>
                        </div>
                        <div className="point">
                            <div className="pointImage"></div>
                            <div className="pointText">
                                Daudz ko
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AboutContainer>
    )
}
export default About;