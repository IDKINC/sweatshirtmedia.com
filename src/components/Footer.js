import React from "react";
import { Link } from "gatsby";

import SocialIcons from "./SocialIcons";

import styled from "styled-components";
import { breakpoints } from "./breakpoints";

import logo from "../img/logo.svg";
import waves from "../img/waves.svg";
import ContactForm from "./contact/contactForm";
import Button from "./atoms/Button";
import Separator from "./atoms/Separator";

const Footer = class extends React.Component {
  render() {
    return (
      <>

        {this.props.cta && (
          <FooterCTA>
          <Separator  flipped/>
            <div>
              <h2>Let us earn that "favorite <img
                src={logo}
                alt="Sweatshirt"
                style={{ width: "auto", height: "1em", verticalAlign: "middle" }}
              />" title.</h2>
            </div>
            <Button to="/contact" label="Let's Talk »" size="large" white />
          <Separator  color="#333"/>

          </FooterCTA>
        )}

        <StyledFooter>
          <h5
            style={{
              color: "#fff",
              fontWeight: "100",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            &copy;&nbsp;2020{" "}
            <Link
              to="/"
              title="Logo"
              style={{
                margin: "0 0 0 0.5em",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src={logo}
                alt="Sweatshirt"
                style={{ width: "auto", height: "1.25em" }}
              />
            </Link>
          </h5>

          <SocialIcons />
        </StyledFooter>
      </>
    );
  }
};

export default Footer;

const FooterCTA = styled.footer`
  width: 100%;
  background: var(--mainColor) url(${waves}) bottom center no-repeat;
  background-size: 100%;
  padding: 3rem 1rem;
  min-height: 25vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  position: relative;

  align-items: center;
  justify-content: center;

  @media ${breakpoints.laptop} {
    padding: 12rem 3rem 12rem;
    flex-direction: row;
  }

  & > div {
    margin-left: 0;
    text-align: center;
  }
  h1,
  h2 {
    font-weight: 900;
    margin: 0 auto;
  }

  a.button {
    font-size: 1.25em;
    width: 100%;
    font-weight: 900;
    transition: 200ms;
      margin: 1rem;

    @media ${breakpoints.laptop} {
      width: auto;
    }
  }

  form {
    width: 95%;
    margin: 0 auto;
    @media ${breakpoints.laptop} {
      width: 70%;
      margin: 0 auto 0 0;
    }

    label {
      color: #fff;
    }
  }
`;

const StyledFooter = styled.footer`
  padding: 0 3rem;
  background: var(--gray);
  /* box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.2); */

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media ${breakpoints.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;

    h1,
    h5 {
      text-align: center;
      margin: 0;
    }
    img {
      margin: 0 auto;
    }
  }
`;
