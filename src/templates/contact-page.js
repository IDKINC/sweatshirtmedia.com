import React from "react";
import Layout from "../components/Layout";
import ContactForm from "../components/contact/contactForm";

import { breakpoints } from "../components/breakpoints";

import styled from "styled-components";
import bgImg from "../img/city-bg.jpg";
import SocialIcons from "../components/SocialIcons";
import SEO from "../components/seo";
import Clock from "../components/Clock";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      pageContent: { ...this.props.data.markdownRemark.frontmatter },
    };
    console.log(this.state);
  }
  render() {
    let content = this.state.pageContent;
    const timeZones = [
      { offset: "America/Los_Angeles", city: "Los Angeles" },
      { offset: "America/Denver", city: "Albuquerque" },
      { offset: "America/Chicago", city: "Houston" },
      { offset: "America/New_York", city: "New York" },
    ];

    const clocks = timeZones.map(({ offset, city }, i) => {
      console.log({ index: i, offset: offset });
      return <Clock key={i} tzOffset={offset} city={city} />;
    });
    return (
      <Layout cta={false}>
        <SEO title="Contact" />

        <ContactContainer>
          <ClockContainer>
            <Wherever>Wherever You Need Us:</Wherever>
            {clocks}
          </ClockContainer>
          <ContactContent>
            <h1>{content.title}</h1>

            <ContactForm
              labels={{
                name: content.nameLabel,
                email: content.emailLabel,
                message: content.messageLabel,
                submit: content.submitLabel,
              }}
            />
          </ContactContent>
          <SocialIcons style={{ marginBottom: "auto" }} />
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
  display: flex;
  background: var(--mainColor) url(${bgImg}) top center no-repeat;
  background-size: cover;
  overflow: hidden;
  flex-direction: column;
  padding-top: 7em;

  @media ${breakpoints.laptop} {
    flex-direction: column;
    min-height: 85vh;
    padding-top: 0;
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

  @media ${breakpoints.laptop} {
    margin: auto auto 1em;

    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    color: #fff;

    width: 50%;
  }
`;

const Wherever = styled.span`
  font-weight: bold;
  color: #fff;
  grid-column: 1 / -1;
  display: block;

  @media ${breakpoints.laptop} {

    grid-column: 1;

  }
`;

const ContactContent = styled.div`
  background: #fff;

  padding: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 95%;
  margin: 0 auto;

  form {
    width: 95%;
  }

  @media ${breakpoints.laptop} {
    width: 50%;
    margin: 1rem auto;
    background: #fff;
    z-index: 1;
    position: relative;
  }
`;
