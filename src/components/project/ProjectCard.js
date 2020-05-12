import { Link } from "gatsby";
import PropTypes from "prop-types";

import Img from "gatsby-image";

import styled from "styled-components";

import React from "react";

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5em 0;
  width: 100%;
  color: #333;
  transition: 100ms;
  z-index: 2;

  p {
    font-weight: 100;
    text-align: center;
    margin: 0;
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: var(--borderRadius);
  box-shadow: 0 3px 6px -2px rgba(0, 0, 0, 0.4);
  transition: 300ms;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: var(--borderRadius);
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: auto;
    transition: transform 1000ms;
  }
`;

const Card = styled.div`
  background: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .gatsby-image-wrapper {
    width: 100%;
    transition: 300ms;
  }

  &:hover {
    ${Meta} {
      color: var(--mainColor);
    }

    ${ImgWrapper} {
      img {
        transform: scale(1.1);
      }
    }
  }
`;

const ProjectCard = ({ project, style, featured }) => (
  <Card>
    <Link
      to={project.fields.slug}
      style={{ textDecoration: `none`, color: "#212121", ...style }}
      className={featured ? "featured" : ""}
    >
      <ImgWrapper>
        <img
          src={project.frontmatter.featuredImage.childImageSharp.resize.src}
        />
      </ImgWrapper>
      <Meta>
        <p>{project.frontmatter.title}</p>
        {/* {project.fields.type && <h5>{project.fields.type} {project.fields.clients[0] && <span>for {project.fields.clients}</span>}</h5>} */}
      </Meta>
    </Link>
  </Card>
);

ProjectCard.propTypes = {
  project: PropTypes.object,
};

ProjectCard.defaultProps = {
  project: ``,
};

export default ProjectCard;
