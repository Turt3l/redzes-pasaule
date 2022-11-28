import styled from "styled-components";
const FindusContainer = styled.div `
    overflow: hidden;
    font-family: 'Scada';
    font-style: normal;
    font-weight: 700;
    background: #DEDBD2;
    overflow: hidden;
    width: 100%;
    height: 100vh;

    display: flex; 
    justify-content: center;
    .findus_header {
        font-weight: 700;
        font-size: 96px;
        line-height: 119px;
        text-align: center;

        color: #4A5759;

    }
    .findus_text {
        display: flex;

        justify-content: center;
    }
    .findus_text p {
        font-weight: 700;
        font-size: 48px;
        line-height: 60px;
        text-align: center;
        width: 50%;

        color: #4A5759;

    }

    .email {
        display: inline-flex;
        align-items: center;

        position: relative;
    }

    .phone {
        display: inline-flex;
        align-items: center;

        position: relative;
    }
    
`


function FindUs() {
    return (
        <FindusContainer>
            <div className="find_wrapper">
                <div className="findus_header">
                    <p>Kā sazināties ar mums?</p>
                </div>
                <div className="findus_text"><p>Ar mums var sazināties izmantojot e-pastu, vai zvanot parrrrr mūsu tālruni.</p></div>
                <div className="email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                    <p>blablabla@gmail.com</p>
                </div>
                <div className="phone">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <p>+371 22222222</p>
                </div>
            </div>
        </FindusContainer>
    )
}
export default FindUs;