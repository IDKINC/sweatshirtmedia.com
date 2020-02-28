import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Img from 'gatsby-image'

import Gallery from "../components/Gallery"
import ProjectCard from "../components/project/ProjectCard"


import { breakpoints } from "../components/breakpoints"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Grid from "../components/layout/grid"
import { Container } from "../components/atoms/Container"


const VideoGrid = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  align-items: flex-start;

  @media ${breakpoints.laptop} {
    grid-template-columns: 3fr 2fr;
  }
`
const VideoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;
    width: 100%;
    grid-column: 1 / -1;
`

const ImagesWrapper = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 1fr; 
    grid-gap: 1em;   
    grid-column: 1;
    @media ${breakpoints.laptop} {
      position: sticky;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 0;
    }

    img{
      width: 100%;
      height: auto;
    }
`
const ProjectContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  h1,h2{
    margin: 5px;
    width: 100%;
    text-align: center;
  }

  @media ${breakpoints.laptop} {
    position: sticky;
    display: flex;
    top: 0;
  }

`
const SingleProject = props => {
  const {
    data: { project },
  } = props

  const { related } = props.pageContext



  let galleryArray = []

  if (project.frontmatter.featuredImage) { galleryArray.push(project.frontmatter.featuredImage) }
  if (project.frontmatter.images) { galleryArray.push(...project.frontmatter.images.map((image) => image.image)) }

  console.log(galleryArray);
  return (
    <Layout>
      <SEO title={project.frontmatter.title + " - " + project.fields.type + " " + (project.fields.clients.length ? "for " + project.fields.clients : "")} img={project.frontmatter.featuredImage.childImageSharp.resize.src}/>
      <VideoGrid>
        <Gallery pictures={galleryArray} />



        <ProjectContent>
          <h1>{project.frontmatter.title}</h1>
          <h2>
            {project.fields.type}{project.fields.clients.length ? " for " + project.fields.clients[0] : ""}
          </h2>
          {project.fields.externalLink && <a href={project.fields.externalLink} className="button" target="_blank" rel="noreferer" style={{ width: "100%", margin: "1em auto", background: "var(--mainColor)", color: "#fff", fontWeight: 900 }}>View Project&nbsp;<FontAwesomeIcon width="16" icon="external-link-alt" style={{ maxWidth: "1.5em", marginLeft: "0.5em" }} /></a>}

          {project.fields.youtubeLink && <a href={project.fields.youtubeLink} className="button" target="_blank" rel="noreferer" style={{ width: "100%", margin: "1em auto", background: "#f44336", color: "#fff", fontWeight: 900 }}>Watch on YouTube <FontAwesomeIcon width="16" icon={["fab", "youtube"]} style={{ maxWidth: "1.5em", marginLeft: "0.5em" }} /></a>}


          <div dangerouslySetInnerHTML={{ __html: project.html }} />
        </ProjectContent>
      </VideoGrid>
      <Container>
        <h2><Link to='/portfolio'>More Projects</Link></h2>

        <Grid col={3} >
          {related.map((project, i) => (
            <ProjectCard project={project} />
            // <ProjectCard project={project} featured={i === 0}/>
          ))}
        </Grid>
      </Container>

    </Layout>
  )
}

export default SingleProject

export const postQuery = graphql`
  query PostBySlug($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
        clients
        type
        youtubeLink
        externalLink
      }
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
                src
              }
              resize(width: 1200) {
                src
              }
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
              src
            }
            resize(width: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
