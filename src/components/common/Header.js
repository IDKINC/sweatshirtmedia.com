import React from "react";
import styled, { keyframes } from "styled-components";

import logo from "../../img/logo.svg";
import icon from "../../img/sweatshirt-icon.svg";
import { breakpoints } from "../breakpoints";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ whiteIcon, isHeaderOpen, setIsHeaderOpen, backButton = false, backgroundHeader = true }) => {

  const backButtonClick = () => {
    window.history.back();
  };

  return (
    <>
      {backButton && <BackButton onClick={backButtonClick}><FontAwesomeIcon icon='arrow-left' /> back</BackButton>}
      <IconWrapper
        onClick={(e) => {
          e.preventDefault();
          setIsHeaderOpen(!isHeaderOpen);
        }}
        className={isHeaderOpen ? "is-open" : ""}
      >
        <Icon
          src={icon}
          alt="Sweatshirt Icon"
          onClick={(e) => {
            e.preventDefault();
            setIsHeaderOpen(!isHeaderOpen);
          }}
          className={
            (isHeaderOpen ? "is-open" : "") + " " + (whiteIcon ? "white-icon" : "")
          }
        />
        <span>{isHeaderOpen ? "hide" : "menu"}</span>
      </IconWrapper>
      <StyledHeader className={isHeaderOpen ? "is-open" : ""}>
        <HeaderWrapper>
          <LogoWrapper to="/" title="Logo">
            <Logo src={logo} alt="Sweatshirt" />
          </LogoWrapper>

          <Nav className={isHeaderOpen ? "is-open" : ""}>
            <Link to="/portfolio">portfolio</Link>
            <Link to="/team">team</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
          </Nav>
        </HeaderWrapper>
      </StyledHeader>

{backgroundHeader && <BackgroundHeader>
        <LogoWrapper to="/" title="Logo" onClick={(e) => {
            e.preventDefault();
            setIsHeaderOpen(!isHeaderOpen);
          }}>
          <Logo src={logo} alt="Sweatshirt" />
        </LogoWrapper>
      </BackgroundHeader>}

      {isHeaderOpen && (
        <NavBG
          onClick={() => {
            setIsHeaderOpen(false);
          }}
        />
      )}
    </>
  );
};

export default Header;

const slideIn = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;


const HeaderWrapper = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media ${breakpoints.laptop} {
    flex-direction: row;

    transform: rotate(-2deg);
  }
`;


const LogoWrapper = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 1em 0 0;
`;
const Logo = styled.img`
  width: 50vw;
  filter: invert(0);
  max-height: 100% !important;
  margin: 1em;
  transform-origin: 50% 0%;
  /* margin: 1em; */

  @media ${breakpoints.laptop} {
    width: 20vw;
  }
`;

const NavBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  animation: ${slideIn} 400ms;

  z-index: 1000;

  @media ${breakpoints.laptop} {
    background: rgba(0, 0, 0, 0);
  }
`;

const Icon = styled.img`
  max-height: 100% !important;
  display: block;
  transform-style: preserve-3d;
  backface-visibility: visible;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0%;

  z-index: 99999999999999999999999999; /* It's OVER 9000 */

  transform: rotateY(0deg);
  /* transform-style: preserve-3d; */
  transition: transform 300ms;
  /* backface-visibility: visible; */
  background: rgba(51, 51, 51, 0.3);

  clip-path: var(--cornerCut);

  height: 5rem;
  width: 5rem;
  flex-direction: column;

  padding: 0.75em;
  letter-spacing: 6px;

  color: #fff;
  font-weight: 100;
  cursor: pointer;
  transition: 300ms;

  ${Icon} {
    transform: rotateY(0deg);
    transition: transform 600ms;
  }

  span {
    transition-duration: 800ms;
    font-size: 0.5rem;

    @media ${breakpoints.laptop} {
      font-size: 1rem;
    }
  }

  &:hover {
    background: rgba(51, 51, 51, 0.6);
  }

  &.is-open {
    background: var(--mainColor);
    /* transform: rotateY(180deg); */

    ${Icon} {
      transform: rotateY(-180deg);
    }

    &:hover {
      background: var(--darkerColor);
    }

    ${Icon} {
    }
  }

  @media ${breakpoints.laptop} {
    height: 9.5rem;
    width: 7.5rem;
  }
`;

const Nav = styled.nav`
  display: none;
  flex-direction: column;
  &.is-open {
    display: flex;

    width: 100%;
  }

  a {
    padding: 1em;
    color: #fff;

    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);

    text-align: center;
  }

  @media ${breakpoints.laptop} {
    flex-direction: row;

    a {
      font-size: 1rem;
      width: auto;
      border: none;

      &:hover {
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

const StyledHeader = styled.header`
  position: fixed;
  overflow: hidden;
  top: 0;
  width: 100%;
  transition: height 300ms, background 300ms;
  will-change: auto;

  height: 0;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 4em 0 1em;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 94%, 0% 100%);

  @media ${breakpoints.laptop} {
    /* height: 9em; */
    padding: 0 0 0 9em;

    clip-path: polygon(0 0, 100% 0, 100% 50%, 0% 100%);
  }

  ${HeaderWrapper} {
    display: none;
  }

  &.is-open {
    width: 100%;
    background: #333;
    min-height: 70vh;

    z-index: 98999;

    box-shadow: var(--boxShadow);

    ${HeaderWrapper} {
      display: flex;
    }

    @media ${breakpoints.laptop} {
      height: 9em;
      min-height: 0;
    }
  }
`;

const BackgroundHeader = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
/* padding: 4rem; */

height: 4rem;
background: var(--mainColor);
clip-path: url(#collar);

/* img{filter: invert(1);} */

@media ${breakpoints.laptop} {
justify-content: center;


  height: 8.5rem;


}

${Logo}{
  margin-right: 0;
}

`


const BackButton = styled.button`
  padding: 0.5rem;

  z-index: 9999999;

  background: #fff;
  border: none;
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: auto;
  svg,i{
    font-size: 1rem;
    width: 0.75rem;
    margin-right: 0.5ch;
  }


@media ${breakpoints.laptop} {

  position: fixed;


  top: 1rem;
  right: 1rem;
  font-size: 1rem;

  padding: 1rem;


}
`;
