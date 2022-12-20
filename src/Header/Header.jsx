import styled from "styled-components";
import React, {useState, useEffect} from "react";
import useScrollListener from "./useScrollListener";
const HeaderContainer = styled.div `
    width: 100%;
    align-items: center;
    display: flex;
    height: 60px;
    z-index: 1000000;
    position: fixed;
    top: 0;
    line-height: 4em;
    text-align: center;
    background-color: white;
    color: black;
    font-family: sans-serif;
    transition: transform 150ms ease-in-out;
    &.nav-bar--hidden {
        transform: translateY(-100%);
    }
    .headerWrap {
        text-align: center;
        width: 100%;
        align-items: center;
        display: flex;
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
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();
  
    // update classList of nav on scroll
    useEffect(() => {
      const _classList = [];
  
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
        _classList.push("nav-bar--hidden");
  
      setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);
    return (
        <HeaderContainer className={navClassList.join(" ")}>
            <div className="headerWrap">
                <div className="logoContainer">
                   
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