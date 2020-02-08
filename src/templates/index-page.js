import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"

import logo from '../img/logo.svg'


import Layout from '../components/Layout'
import TeamCard from "../components/team/TeamCard"
import ProjectCard from "../components/project/ProjectCard"

import Grid from "../components/layout/grid"

import { breakpoints } from "../components/breakpoints"

import SocialIcons from '../components/SocialIcons'

import VideoBanner from '../components/VideoBanner'

import { Container } from '../components/atoms/Container'

import BannerCover from "../img/videobg.jpg"

import SweatshirtIcon from "../img/sweatshirt-icon.svg"
import Button from '../components/atoms/Button'



export const IndexPageTemplate = ({
  image,
  team,
  projects,
  storyTeller
}) => (
    <div>

      <Container style={{
        padding: "1rem", minHeight: "100vh", backgroundImage: `url(${BannerCover})`, backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", alignItems: "center", justifyContent: "center", backfaceVisibility: "visible", position: 'relative',
      }} >

        <VideoBanner />


          <SweatshirtIconStyled src={SweatshirtIcon} alt="Sweatshirt" />
        <div style={{ zIndex: "999", position: "relative" }}>
          <img src={logo} alt="Sweatshirt" style={{ width: '100%', height: 'auto' }} />
          <BannerNav>
      <Button to="/portfolio" label="See Our Work" white/>
      <Button to="/contact" label="Get In Touch &raquo;"/>



          </BannerNav>
          <SocialIcons />
        </div>



      </Container>

      <Container>
        <h1><Link to="/portfolio">We Are Makers.</Link></h1>
        <Grid col={3}>
          {projects.map(({ node: project }, i) => (
            <ProjectCard project={project} />
            // <ProjectCard project={project} featured={i === 0}/>
          ))}

        <Button to="/portfolio" label="See The Rest Of Our Work &raquo;" size="large" style={{gridColumn:"1 / -1"}}/>
        </Grid>



      </Container>

      <Container style={{
        minHeight: '80vh', backgroundImage: `url(${
          !!storyTeller.childImageSharp ? storyTeller.childImageSharp.fluid.src : storyTeller
          })`, backgroundPosition: "center center", backgroundAttachment: "fixed"
      }}>
        <h1 style={{ color: "#fff", width: "100%", textShadow: "1px 1px 0 var(--mainColor), 2px 2px 0 var(--darkerColor), 3px 3px 0 var(--darkerColor), 4px 4px 0 var(--darkerColor), 5px 5px 0 var(--darkerColor)" }}>We Are Storytellers.</h1>
        <Grid col={3} style={{ background: "transparent", width: "80%" }}>
          <SkillsCard>
            <h4>Brand Identity</h4>
          </SkillsCard>
          <SkillsCard>
            <h4>Video Production</h4>
          </SkillsCard>
          <SkillsCard>
            <h4>Audio Production</h4>
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

      </Container>


      <Container>
        <h1><Link to="/team">Get To Know Us.</Link></h1>
        <Grid>
          {team.map(({ node: member }) => (
            <TeamCard person={member} />
          ))}
        </Grid>
      </Container>
    </div>
  )

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index
  const { team, projects, storyTeller } = data

  return (
    <Layout noHeader>
      <IndexPageTemplate
        image={frontmatter.image}
        team={team.edges}
        projects={projects.edges}
        storyTeller={storyTeller}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
  index: markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
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
  storyTeller: file(relativePath: {eq: "what-the-hex-dark.png"}) {
    childImageSharp {
      fluid(maxWidth: 2400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  team: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "team-member"}}}, limit: 6, sort: {fields: fields___weight, order: DESC}) {
    edges {
      node {
        id
        frontmatter {
          name
          jobTitle
          featuredImage {
            childImageSharp {
              resize {
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
  projects: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "project"}}}, limit: 6, sort: {fields: fields___weight, order: DESC}) {
    edges {
      node {
        frontmatter {
          title
          
          featuredImage {
            childImageSharp {
              resize(width: 600, height: 600, cropFocus: CENTER  ) {
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

`




const SkillsCard = styled.div`
background: #fff;
padding: 1rem;
transition: 100ms;
box-shadow: var(--boxShadow);
border-radius: var(--borderRadius);

display: flex;
align-items: center;
justify-content: center;

h4{
  margin: 0;
  text-align: center;


  font-size: 0.8em;

  @media ${breakpoints.laptop} {
    font-size: inherit;

  }
}

&:hover{
  background: var(--mainColor);
  color: #fff;
}
`

const SweatshirtIconStyled = styled.img`

opacity:0.5; 
width: 15%; 
height: auto; 
position:absolute; 
bottom:1rem; 
  right:1rem;
  z-index: 999999;

@media ${breakpoints.laptop} {
  bottom:3em; 
  right:3em;
  width: 10%; 

  }

`

const MorePortfolio = styled.a`

  verticalAlign: middle; 
  color: inherit; 
  font-weight: 100; 
  margin:0 auto; 
  background: var(--mainColor); 
  color: #fff;
  font-size: 1rem; 
  width: 100%;
  grid-column: 1 ;

  
  @media ${breakpoints.laptop} {
    width: 80%;

    font-size: 1.5rem;
  margin:3rem auto 0; 
    
  grid-column: 1 / -1;

  }


`


const BannerNav = styled.nav`

width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin: 2rem 0;
color: #fff;

    @media ${breakpoints.laptop} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1rem;

      width: 50vw;

    }

`



