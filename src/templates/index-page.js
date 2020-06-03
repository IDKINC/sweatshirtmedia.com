import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import styled from "styled-components";

import logo from "../img/logo.svg";

import Layout from "../components/Layout";
import { breakpoints } from "../components/breakpoints";

import SocialIcons from "../components/SocialIcons";

import VideoBanner from "../components/VideoBanner";

import { Container } from "../components/atoms/Container";

import BannerCover from "../img/videobg.jpg";

import Button from "../components/atoms/Button";
import SEO from "../components/seo";
import Separator from "../components/atoms/Separator";

export const IndexPageTemplate = ({ tagline }) => (
  <div>
    <Container
      style={{
        padding: "1rem",
        minHeight: "100vh",
        backgroundImage: `url(${BannerCover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        alignItems: "center",
        justifyContent: "center",
        backfaceVisibility: "visible",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <VideoBanner />

      {/* <SweatshirtIconStyled src={SweatshirtIcon} alt="Sweatshirt" /> */}
      <div
        style={{
          zIndex: "999",
          position: "relative",
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={logo}
          alt="Sweatshirt"
          style={{ width: "100%", height: "auto" }}
        />
        <Tagline>
        {tagline}
        </Tagline>
        <BannerNav>
          <Button to="/portfolio" label="See Our Work" white />
          <Button to="/contact" label="Get In Touch &raquo;" />
        </BannerNav>
        <SocialIcons />
      </div>

      <Separator color="var(--mainColor)" />
    </Container>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index;
  const { team, projects, storyTeller } = data;

  return (
    <Layout noFooter whiteIcon backgroundHeader={false}>
      <SEO title="Sweatshirt Media" />

      <IndexPageTemplate
        image={frontmatter.image}
        tagline={frontmatter.tagline}
        team={team.edges}
        projects={projects.edges}
        storyTeller={storyTeller}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    index: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        tagline
        portfolioHeader
      }
    }
    team: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "team-member" } } }
      limit: 1000
      sort: { fields: fields___weight, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            jobTitle
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 800, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                  src
                }
              }
            }
          }
          fields {
            teamID
            slug
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "project" } } }
      limit: 6
      sort: { fields: fields___weight, order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title

            featuredImage {
              childImageSharp {
                resize(width: 600, height: 600, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
          fields {
            type
            slug
            clients
          }
        }
      }
    }
  }
`;

const Tagline = styled.h2`
  color: #fff;
  margin: 0;
  font-size: 1rem;
  max-width: 100%;
  text-align: center;

  @media ${breakpoints.laptop} {

    font-size: 2rem;

    max-width: 80%;

  }
  
`;


const BannerNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2rem 0;
  color: #fff;

  z-index: 2;
  a {
    margin-bottom: 1em;
    text-transform: lowercase;

    &.main{
      background: var(--mainColor);
    }
  }

  @media ${breakpoints.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    width: 30vw;
  }
`;
