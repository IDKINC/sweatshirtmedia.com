import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../breakpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = ({ twitter, instagram, website }) => {
  return (
    <>
      <StyledSocialLinks>
        {twitter && (
          <a href={twitter}>
            <FontAwesomeIcon fixedWidth icon={["fab", "twitter"]} />
          </a>
        )}

        {instagram && (
          <a href={instagram}>
            <FontAwesomeIcon fixedWidth icon={["fab", "instagram"]} />
          </a>
        )}

        {website && (
          <a href={website}>
            <FontAwesomeIcon fixedWidth icon="desktop" />
          </a>
        )}
      </StyledSocialLinks>
    </>
  );
};

export default SocialLinks;

const StyledSocialLinks = styled.div`
  
  text-align: inherit;


  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.25em;
    text-align: inherit;
  }

  svg {
    height: 1rem;
    width: 1rem;

    @media ${breakpoints.laptop} {
      height: 2rem;
      width: 2rem;
    }
  }
`;
