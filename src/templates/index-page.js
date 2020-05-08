import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import logo from "../img/logo.svg";

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
import Slide from "../components/Slider";
import Separator from "../components/atoms/Separator";




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
        position: "relative"
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
          flexDirection: "column"
        }}
      >
        <img
          src={logo}
          alt="Sweatshirt"
          style={{ width: "100%", height: "auto", zIndex: 2 }}
        />
        <BannerNav>
          <Button to="/portfolio" label="See Our Work" white />
          <Button to="/contact" label="Get In Touch &raquo;" />
        </BannerNav>
        <SocialIcons />
      </div>

      <Separator />
    </Container>

    <Container>
      <h1>
        <Link to="/portfolio">We Are Makers.</Link>
      </h1>
      <Slide settings={{slidesToShow: 5}}>
        {projects.map(({ node: project }, i) => (
          <ProjectCard project={project} />
          // <ProjectCard project={project} featured={i === 0}/>
        ))}
      </Slide>
    

    </Container>

    <Container
      style={{
        minHeight: "80vh",
        backgroundImage: `url(${
          !!storyTeller.childImageSharp
            ? storyTeller.childImageSharp.fluid.src
            : storyTeller
        })`,
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
      }}
    >
      <Separator flipped />

      <h1
        style={{
          color: "#fff",
          width: "100%",
          textShadow:
            "1px 1px 0 var(--mainColor), 2px 2px 0 var(--darkerColor), 3px 3px 0 var(--darkerColor), 4px 4px 0 var(--darkerColor), 5px 5px 0 var(--darkerColor)"
        }}
      >
        We Are Storytellers.
      </h1>
      <Grid col={3} style={{ background: "transparent", width: "80%" }}>
        <SkillsCard>
          <h4>Brand Identity</h4>
        </SkillsCard>
        <SkillsCard>
          <h4>Video Production</h4>
        </SkillsCard>
        <SkillsCard>
          <h4>Photography</h4>
        </SkillsCard>
        <SkillsCard>
          <h4>Art Direction</h4>
        </SkillsCard>
        <SkillsCard>
          <h4>Web Development</h4>
        </SkillsCard>
        <SkillsCard>
          <h4>Marketing Strategy</h4>
        </SkillsCard>
      </Grid>
    <Separator  />
    </Container>

    <Container>

      <h1>
        <Link to="/team">Get To Know Us.</Link>
      </h1>
      <Grid col={4}>
        {team.map(({ node: member }) => (
          <TeamCard person={member} />
        ))}
        <Button
          to="/team"
          label="Meet The Team &raquo;"
          size="large"
          style={{ gridColumn: "1 / -1" }}
        />
      </Grid>


    </Container>
  </div>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index;
  const { team, projects, storyTeller } = data;

  return (
    <Layout noHeader>
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
      frontmatter: PropTypes.object
    })
  })
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

const SkillsCard = styled.div`
  background: #fff;
  padding: 1rem;
  transition: 100ms;
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);

  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    margin: 0;
    text-align: center;

    font-size: 0.8em;

    @media ${breakpoints.laptop} {
      font-size: inherit;
    }
  }

  &:hover {
    background: var(--mainColor);
    color: #fff;
  }
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
    top : 1rem;
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

  z-index: 2

  a {
    margin-bottom: 1em;
  }

  @media ${breakpoints.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    width: 50vw;
  }
`;

const MeetTheTeam = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  overflow: hidden;
  border-radius: var(--borderRadius);
  z-index: 1;
  transition: 300ms;

  @media ${breakpoints.laptop} {
    flex-direction: column;

    font-size: 2rem;
    svg {
      width: 4rem;
    }
  }

  &:before {
    position: absolute;
    width: 0%;
    height: 100%;
    left: 0;
    background: var(--mainColor);
    content: "";
    z-index: -1;
    transition: 300ms;
  }

  &:hover {
    color: #fff;

    &:before {
      width: 100%;
    }
  }

  &:active {
    color: var(--darkerColor);

    &:before {
      left: unset;
      right: 0;
      width: 0;
    }
  }
`;
