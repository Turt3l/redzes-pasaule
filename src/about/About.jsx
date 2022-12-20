import styled from "styled-components";
const AboutContainer = styled.div `
margin: 0 200px 0 200px;
    .aboutPoints {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }
    .ch-info h3{
        margin-bottom: 0;
        font-weight: 700;
        font-size: 30px;
        font-family: 'Scada';
    }
    .headerContainer h3{
        margin-bottom: 0;
        font-weight: 700;
        font-size: 8vh;
        line-height: 119px;
        text-align: center;
        color: #4A5759;
        font-family: 'Scada';
        
    }
    .descriptionTextContainer {
        padding-bottom: 50px;
        font-size: 30px;
        text-align: center;
        color: #4A5759;
        font-family: 'Scada';
    }
    
    .ch-grid:after,
    .ch-item:before {
        content: '';
        display: table;
    }
    
    .ch-grid:after {
        clear: both;
    }
    
    .ch-grid li {
        width: 290px;
        height: 290px;
        display: inline-block;
        margin: 20px;
    }
    .ch-item {
        border: 1px black solid;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
        cursor: default;
        box-shadow: 
            inset 0 0 0 0 #4A5759,
            inset 0 0 0 16px rgba(255,255,255,0.6),
            0 1px 2px rgba(0,0,0,0.1);
        transition: all 0.4s ease-in-out;
    }
    .ch-img-1 { 
        background-image: url(../images/4.jpg);
    }
    
    .ch-img-2 { 
        background-image: url(../images/5.jpg);
    }
    
    .ch-img-3 { 
        background-image: url(../images/6.jpg);
    }
    .ch-info {
        top:25%;
        text-align: center;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        opacity: 0;
        transition: all 0.4s ease-in-out;
        transform: scale(0);
        backface-visibility: hidden;
    }
    .ch-item:hover {
        box-shadow: 
            inset 0 0 0 190px #4A5759,
            inset 0 0 0 16px rgba(255,255,255,0.8),
            0 1px 2px rgba(0,0,0,0.1);
    }
    .ch-item:hover .ch-info {
        opacity: 1;
        transform: scale(1);	
    }
`
function About() {
    return (
        <AboutContainer>
            <div className="aboutWrap">
                <div className="aboutRow">
                    <div className="headerContainer">
                        <h3>Noderīga informācija</h3>
                        <div className="descriptionTextContainer">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aperiam magni voluptatum sed alias optio! Incidunt, repellendus, doloremque nesciunt ab laudantium sed commodi voluptas nostrum asperiores molestiae sapiente, vitae nam.</p>
                        </div>
                    </div>
                    <div className="aboutPoints">
                        <ul class="ch-grid">
                            <li>
                                <div class="ch-item ch-img-1">
                                    <div class="ch-info">
                                        <h3>Slimibas</h3>
                                        <a>info</a>
                                    </div>
                                </div>
                                <div className="descriptionTextContainer">
                                    <p>acu parbauda</p>
                                </div>
                            </li>
                            <li>
                                <div class="ch-item ch-img-2">
                                    <div class="ch-info">
                                        <h3>Berniem</h3>
                                        <a>info</a>
                                    </div>
                                </div>
                                <div className="descriptionTextContainer">
                                    <p>acu parbauda</p>
                                </div>
                            </li>
                            <li>
                                <div class="ch-item ch-img-3">
                                    <div class="ch-info">
                                        <h3>Senioriem</h3>
                                        <a>info</a>
                                    </div>
                                </div>
                                <div className="descriptionTextContainer">
                                    <p>acu parbauda</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </AboutContainer>
    )
}
export default About;