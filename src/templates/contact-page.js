import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../components/Layout";
import ContactForm from "../components/contact/contactForm";

import { breakpoints } from "../components/breakpoints";

import styled from "styled-components";
import waves from "../img/city-bg.jpg";
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
    return (
      <Layout cta={false}>
        <SEO title="Contact" />

        <ContactContainer>
          <ClockContainer>
            <Clock />
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
  background: var(--mainColor) url(${waves}) bottom center no-repeat;
  background-size: 100%;
  overflow: hidden;
  flex-direction: column;

  @media ${breakpoints.laptop} {
    flex-direction: column;
    min-height: 85vh;
  }
`;

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactContent = styled.div`
  background: #fff;

  padding: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    width: 95%;
  }

  @media ${breakpoints.laptop} {
    width: 50%;
    margin: auto;
    background: #fff;
    z-index: 1;
    position: relative;

  
  }
`;
