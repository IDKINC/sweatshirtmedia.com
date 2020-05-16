import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import logo from "../../img/logo.svg";
import icon from "../../img/sweatshirt-icon.svg";
import { breakpoints } from "../breakpoints";
import { Link } from "gatsby";

const Header = ({ whiteIcon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Icon
        src={icon}
        alt="Sweatshirt Icon"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className={
          (isOpen ? "is-open" : "") + " " + (whiteIcon ? "white-icon" : "")
        }
      />
      <StyledHeader className={isOpen ? "is-open" : ""}>
        <HeaderWrapper>
          <LogoWrapper to="/" title="Logo">
            <Logo src={logo} alt="Sweatshirt" />
          </LogoWrapper>

          <Nav className={isOpen ? "is-open" : ""}>
            <Link to="/portfolio">portfolio</Link>
            <Link to="/team">team</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
          </Nav>
        </HeaderWrapper>
      </StyledHeader>

      {isOpen && (
        <NavBG
          onClick={() => {
            setIsOpen(false);
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
    display: none;
  }
`;

const Icon = styled.img`
  width: 50vw;
  /* filter: invert(1); */
  max-height: 100% !important;
  display: block;
  position: fixed;
  top: 0;
  left: 0%;

  z-index: 99999999999999999999999999;
  transition: 0;
  background: rgba(51, 51, 51, 0.3);

  clip-path: polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%);

  height: 5em;
  width: 5em;
  object-fit: contain;
  padding: 0.75em;

  &.white-icon {
    /* filter: invert(0); */
  }

  &.is-open {
    /* filter: invert(0); */
    transition: 300ms;

    background: var(--mainColor);
  }

  @media ${breakpoints.laptop} {
    height: 7em;
    width: 7em;
    object-fit: contain;
    margin: 1em;
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
    }
  }
`;
