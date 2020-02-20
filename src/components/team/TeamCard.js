import { Link } from "gatsby";
import PropTypes from "prop-types";

import styled from "styled-components";

import React from "react";
import Img from "gatsby-image";
import { breakpoints } from "../breakpoints";
import SocialLinks from "./SocialLinks";

const Card = styled.div`
  background: #fff;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  min-width: 100%;
  width: 100%;

  & > a {
    width: 100%;
  }

  .gatsby-image-wrapper {
    width: 100%;
  }
  img {
    box-shadow: var(--boxShadow);
    border-radius: var(--borderRadius);
    width: 100%;
    height: auto;
  }

  .full {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    font-size: 2rem;
    align-items: center;
    width: 100%;

    @media ${breakpoints.laptop} {
      grid-template-columns: 1fr 2fr;
      grid-gap: 2rem;
    }
  }

  .flipped {
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
    text-align: right;

    @media ${breakpoints.laptop} {
      grid-template-columns: 2fr 1fr;
    }
    .gatsby-image-wrapper {
      grid-column: 2;
    }
  }
`;

const Bio = styled.div`
  width: 100%;
  margin: 0.25em auto;
  p {
    font-size: 0.8rem;
    margin-bottom: 0;
  }

  @media ${breakpoints.laptop} {
    width: 100%;

    p {
      font-size: 1rem;
    }
  }
`;

const Meta = styled.div`
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr;
  margin: 0.5em 0;
  width: 100%;

  @media ${breakpoints.laptopL} {
    grid-template-columns: 1fr 1fr;
  }

  h4,
  h5 {
    margin: 0;
  }

  h4 {
    font-weight: 900;
    color: var(--mainColor);
  }

  h5 {
    font-size: 1rem;
    margin: 0;
  }

  @media ${breakpoints.laptopL} {
    h4 {
      text-align: left;
    }
    h5 {
      text-align: right;
    }
  }
`;

const FullMeta = styled.div`
  grid-template-columns: 1fr;
  align-items: center;

  h4,
  h5 {
    text-align: inherit;
    margin: 0;

  }

  h4 {
    font-weight: 900;
    color: var(--mainColor);
    font-size: 1.5rem;
    margin: 0.5em 0;

    @media ${breakpoints.laptop} {
      font-size: 4rem;
    }
  }

  h5 {
    font-size: 1rem;

    &.quote {
      font-size: 0.8rem;
      margin: 0.5em 0;
      font-style: italic;
    }
    @media ${breakpoints.laptop} {
      font-size: 1.5rem;

      &.quote {
        font-size: 1rem;
      }
    }
  }
`;

const TeamCard = ({ person, full, flipped }) => (
  <Card id={person.fields.teamID}>
    {full ? (
      <FullCard person={person} flipped={flipped} />
    ) : (
      <SmallCard person={person} />
    )}
  </Card>
);

const FullCard = ({ person, flipped }) => (
  <div
    style={{ textDecoration: `none`, color: "#212121" }}
    className={"full " + (flipped ? "flipped" : "")}
  >
    <Img fluid={person.frontmatter.featuredImage.childImageSharp.fluid} />
    <FullMeta >
      <h4>{person.frontmatter.name}</h4>
      <h5>{person.frontmatter.jobTitle}</h5>
      {person.fields.quote ? (
        <h5 className="quote">"{person.fields.quote}"</h5>
      ) : (
        ""
      )}
      {person.html ? (
        <Bio dangerouslySetInnerHTML={{ __html: person.html }} />
      ) : (
        ""
      )}
      {person.frontmatter.links && (
        <SocialLinks
          twitter={person.frontmatter.links.twitter}
          instagram={person.frontmatter.links.instagram}
          website={person.frontmatter.links.website}
        />
      )}
    </FullMeta>
  </div>
);

const SmallCard = ({ person }) => (
  <Link
    to={"/team#" + person.fields.teamID}
    style={{ textDecoration: `none`, color: "#212121" }}
  >
    <Img fluid={person.frontmatter.featuredImage.childImageSharp.fluid} />
    <Meta>
      <h4>{person.frontmatter.name}</h4>
      <h5>{person.frontmatter.jobTitle}</h5>
    </Meta>
  </Link>
);

TeamCard.propTypes = {
  person: PropTypes.object,
  full: PropTypes.bool
};

TeamCard.defaultProps = {
  person: ``,
  full: false
};

export default TeamCard;
