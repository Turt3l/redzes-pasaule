import styled from "styled-components";
import logo from "../media/images/Redzes_pasaule_logo.png";
const HeaderContainer = styled.div `
    width: 100%;
    align-items: center;
    display: flex;

    top:0;
    left:0;
    height: 60px;
    z-index: 100000000000;
    .headerWrap {
        text-align: center;
        width: 100%;
        align-items: center;
        display: flex;
    }
    }
    .logoContainer {
        width: 10%;
    }
    .links a {
        padding-left: 15px;
        padding-right: 15px;

        cursor: pointer;
    }
    .linkContainer {
        width: 80%;
        font-family: 'Scada';
        font-style: normal;
        font-weight: 400;
        font-size: 23px;
    }
    .burgerMenuContainer {
        width: 10%;
    }
    .logo img {
        max-width: 100px;
        max-height: 100px;
    }
`

function Header() {
    return (
        <HeaderContainer>
            <div className="headerWrap">
                <div className="logoContainer">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                </div>
                <div className="linkContainer">
                    <div className="links">
                        <a>Par</a>
                        <a>BUI</a>
                        <a>Sazināties</a>
                    </div>
                </div>
                <div className="burgerMenuContainer">
                    <div className="burgerMenu"></div>
                </div>
            </div>
        </HeaderContainer>
    )
}
export default Header;