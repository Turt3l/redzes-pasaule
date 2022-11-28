import styled from "styled-components";
const HeaderContainer = styled.div `
    width: 100%;
    align-items: center;
    display: flex;
    background-color: white;
    position:fixed;
    top:0;
    left:0;
    height: 60px;
    z-index: 100000000000;
    .headerWrap {
        text-align: center;
        width: 100%;
        display: flex;
    }
    .logoContainer {
        width: 10%;
    }
    .links a {
        padding-left: 15px;
        padding-right: 15px;
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
`

function Header() {
    return (
        <HeaderContainer>
            <div className="headerWrap">
                <div className="logoContainer">
                    <div className="logo">a</div>
                </div>
                <div className="linkContainer">
                    <div className="links">
                        <a>Par</a>
                        <a>BUI</a>
                        <a>Sazināties</a>
                    </div>
                </div>
                <div className="burgerMenuContainer">
                    <div className="burgerMenu">a</div>
                </div>
            </div>
        </HeaderContainer>
    )
}
export default Header;