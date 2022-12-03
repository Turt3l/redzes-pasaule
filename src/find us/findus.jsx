import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
const FindusContainer = styled.div `
    font-family: 'Scada';
    width: 100%;
    height: auto;
    padding-bottom: 200px;
    display: flex; 
    justify-content: center;
    .find_wrapper {
        display: flex;
        flex-wrap: wrap;
        margin: 0 200px 0 200px;
        justify-content: center;
    }
    .findus_header {
        width: 100%;
        font-weight: 700;
        font-size: 96px;
        line-height: 119px;
        text-align: center;
        color: #4A5759;
    }
    .findus_header h2 {
        font-weight: 700;
        font-size: 96px;
        line-height: 119px;

        color: #4A5759;
    }
    .findus_header p {
        margin-bottom: 0;
    }
    .findus_text h3 {
        padding-bottom: 50px;
        font-size: 30px;
        text-align: center;
        color: #4A5759;
        font-family: 'Scada';
        font-weight: 500;
    }
    .findus_text p {
        font-weight: 400;
        font-size: 36px;
        line-height: 50px;
        text-align: center;
        width: 50%;
        color: #4A5759;
    }
    .socialContainer {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .email {
        display: flex;
        align-items: center;
        
        font-size: 2.5vh;
    }

    .email p {
        padding-left: 1.5vh;
        color: #4A5759;
    }

    .phone p {
        color: #4A5759;
    }

    .phone {
        display: flex;
        align-items: center;

        font-size: 2.5vh;

        padding-left: 7vh;
    }
    .formContainer {
        margin-top: 25px;
        padding: 10px;
        left: 260px;
        top: 610px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px 9px rgba(0, 0, 0, 0.25);
        display: flex;
    }
    .messageBox {
        width: 1715px;
        height: 451px;

        resize: none;
    }
    input {
        border: 1px solid gray;
        padding: 9px;
        margin-bottom: 10px;
        margin-left: 5px;
    }
    textarea {
        padding: 10px;

        text-align: center;
    }
    .submitButton {
        border-radius: 25px;
        background-color: #4A5759;
        font-size: 20px;
        color: white;
        width: 200px;
        height: 50px
    }
    input:focus {
        box-shadow: 1px 2px 2px gray;
        outline: none;
    }
    label {
        font-weight: 700;
        font-family: 'Scada';

        font-size: 24px;
        line-height: 30px;
        color: #4A5759;

        padding: auto;
        margin-left: 15px;
    }
`


function FindUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_nueqemd', 'template_8aodxas', form.current, 'AY1AFJjV24lSP6o0r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };
    return (
        <FindusContainer>
            <div className="find_wrapper">
                <div className="findus_header">
                    <h2>Kā sazināties ar mums?</h2>
                </div>
                <div className="findus_text"><h3>Ar mums var sazināties izmantojot e-pastu, zvanot par mūsu tālruni, vai uzrakstot jautājumu.</h3></div>
                <div className="socialContainer">
                    <div className="email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                        <p>blablabla@gmail.com</p>
                    </div>
                    <div className="phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        <p>+371 22222222</p>
                    </div>
                </div>
                <div className="formContainer">
                    <form ref={form} onSubmit={sendEmail}>
                        <label>Vārds, uzvārds</label>
                        <input type="text" name="user_name" className="userNameContainer" />
                        <label>E-pasts</label>
                        <input type="email" name="user_email" className="emailContainer"/>
                        <label>Vēstījums</label>
                        <textarea name="message" className="messageBox"/>
                        <input type="submit" value="Sūtīt ziņojumu" className="submitButton" />
                    </form>
                </div>
            </div>
        </FindusContainer>
    )
}
export default FindUs;