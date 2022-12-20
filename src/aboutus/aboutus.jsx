import styled from "styled-components";
import image from "../media/images/0x0.jpg";
const Aboutuscontainer = styled.div `
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .row {
        display: flex;
        width: 100%;
    }
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
        width: 70%;
    }
    .aboutus_paragraph.right {
        float: right;
    }
    .imageContainer img {
        max-width: 700px;
        max-height: auto;
    }

`

function AboutUs() {
    return (
        <Aboutuscontainer>
            <div className="aboutus_container">
                <div className="header_text">
                    <p>Kas ir Redzes Pasaule?</p>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="aboutus_paragraph left">
                            <p>Lorem ipsum is placeholder 
                            text commonly used in the graphic, 
                            print, and publishing industries for 
                            previewing layouts and visual mockups.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Fugit doloribus, aut voluptate ullam omnis temporibus numquam odit
                            voluptates natus molestias sequi facere provident ipsam. Labore ut accusamus
                            natus reprehenderit voluptatum?</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="imageContainer">
                            <img src={image}></img>
                        </div>
                    </div>
                </div>
                <div className="row right">
                    <div className="col">
                        <div className="imageContainer">
                            <img src={image}></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className="aboutus_paragraph right">
                            <p>Lorem ipsum is placeholder 
                            text commonly used in the graphic, 
                            print, and publishing industries for 
                            previewing layouts and visual mockups.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Deleniti vero saepe dolor temporibus nesciunt quidem
                            ab quae reprehenderit voluptatem aspernatur molestias expedita doloribus 
                            fugit architecto totam esse, impedit quia repellat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Aboutuscontainer>
    )
}

export default AboutUs;