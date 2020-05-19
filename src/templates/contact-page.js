import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/contact/contactForm";

import { breakpoints } from "../components/breakpoints";

import styled from "styled-components";

import SocialIcons from "../components/SocialIcons";
import SEO from "../components/seo";
import Clock from "../components/Clock";

import atlanta from "../img/city-bg.jpg";
import la from "../img/la.jpg";
import albuquerque from "../img/albuquerque.jpg";
import austin from "../img/austin.jpg";
import boston from "../img/boston.jpg";
import paris from "../img/paris.jpg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const timeZones = [
  { offset: "America/Los_Angeles", city: "Los Angeles", img: la },
  { offset: "America/Denver", city: "Albuquerque", img: albuquerque },
  { offset: "America/Chicago", city: "Austin", img: austin },
  { offset: "America/New_York", city: "Atlanta", img: atlanta },
  { offset: "America/New_York", city: "Boston", img: boston },
  { offset: "Europe/Paris", city: "Paris", img: paris },
];

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidated: false,
      pageContent: { ...this.props.data.markdownRemark.frontmatter },
    };
  }

  render() {
    let content = this.state.pageContent;
    let selectedCity = timeZones[Math.floor(Math.random() * 5)];

    const clocks = timeZones.map(({ offset, city, img }, i) => {
      console.log({ index: i, offset: offset });
      return (
        <Clock
          key={i}
          tzOffset={offset}
          city={city}
          selected={selectedCity.city === city}
        />
      );
    });
    return (
      <Layout cta={false} noFooter>
        <SEO title="Contact" />

        <ContactContainer bg={selectedCity.img}>
          <ContactContent>
            <h1>{content.title}</h1>

            <ClockContainer>
              <Wherever>Wherever You Need Us:</Wherever>
              {clocks}
            </ClockContainer>
            <ContactForm
              labels={{
                name: content.nameLabel,
                email: content.emailLabel,
                message: content.messageLabel,
                submit: content.submitLabel,
              }}
            />

            <SocialIcons style={{ margin: "auto", color: "#333" }} />
          </ContactContent>
        </ContactContainer>
      </Layout>
    );
  }
}

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        nameLabel
        emailLabel
        messageLabel
        submitLabel
        socialHeader
      }
    }
  }
`;

const ContactContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  background: var(--mainColor) center center no-repeat;
  background-image: url(${(props) => props.bg || "none"});
  will-change: auto;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  flex-direction: column;
  padding-top: 7em;

  @media ${breakpoints.laptop} {
    min-height: 100vh;
    padding-top: 0;
    grid-template-columns: 1fr;
  }
`;

const ClockContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  width: 80%;
  margin: 1em auto 1em;
  transition: 300ms;

  @media ${breakpoints.laptop} {
    margin: auto;
    width: 100%;

    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    color: #fff;
    padding: 1em;

    &:hover {
    }
  }
`;

const Wherever = styled.span`
  font-weight: bold;
  color: #fff;
  grid-column: 1 / -1;
  display: block;

  @media ${breakpoints.laptop} {
    grid-column: 1 / -1;
  }
`;

const ContactContent = styled.div`
  /* background: #fff; */

  padding: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 95%;
  margin: 0 auto;

  form {
    width: 100%;
  }

  h1 {
    color: #fff;
    margin-top: auto;
  }

  @media ${breakpoints.laptop} {
    width: 50%;
    height: 100%;
    margin: auto;
    /* background: #fff; */
    z-index: 1;
    position: relative;
  }
`;
