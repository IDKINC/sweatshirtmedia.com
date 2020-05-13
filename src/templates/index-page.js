import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import logo from "../img/logo.svg";
import waves from "../img/waves.svg";

import Layout from "../components/Layout";
import TeamCard from "../components/team/TeamCard";
import ProjectCard from "../components/project/ProjectCard";

import Grid from "../components/layout/grid";

import { breakpoints } from "../components/breakpoints";

import SocialIcons from "../components/SocialIcons";

import VideoBanner from "../components/VideoBanner";

import { Container } from "../components/atoms/Container";

import BannerCover from "../img/videobg.jpg";

import SweatshirtIcon from "../img/sweatshirt-icon.svg";
import Button from "../components/atoms/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SEO from "../components/seo";
import Slide from "../components/Slide";
import Separator from "../components/atoms/Separator";
import Flex from "../components/layout/flex";

export const IndexPageTemplate = ({ image, team, projects, storyTeller }) => (
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
      }}
    >
      <VideoBanner />

      <SweatshirtIconStyled src={SweatshirtIcon} alt="Sweatshirt" />
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
          style={{ width: "100%", height: "auto", zIndex: 2 }}
        />
        <Tagline>
          our mission is to help you bridge the gap between creative and
          critical thinking
        </Tagline>
        <BannerNav>
          <Button to="/portfolio" label="See Our Work" white />
          <Button to="/contact" label="Get In Touch &raquo;" />
        </BannerNav>
        <SocialIcons />
      </div>

      <Separator />
    </Container>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index;
  const { team, projects, storyTeller } = data;

  return (
    <Layout noHeader noFooter>
      <SEO title="Sweatshirt Media" />

      <IndexPageTemplate
        image={frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        portfolioHeader
      }
    }
    storyTeller: file(relativePath: { eq: "what-the-hex-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
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
  font-size: 1.5rem;
  max-width: 50%;
  text-align: center;
`;

const SweatshirtIconStyled = styled.img`
  opacity: 0.5;
  width: 15%;
  height: auto;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 999999;
  mix-blend-mode: invert;
  @media ${breakpoints.laptop} {
    top: 1rem;
    left: 1rem;
    width: 10%;
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

    width: 50vw;
  }
`;
