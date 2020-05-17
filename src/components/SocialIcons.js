import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

const SocialIcons = ({ color, width, style={} }) => {
  return (
    <SocialIconsGrid color={color} width={width} style={{...style}}>
      <a title="twitter" href="https://twitter.com/mediasweatshirt">
        <FontAwesomeIcon width="16" icon={["fab", "twitter"]} />
      </a>

      <a title="instagram" href="https://www.instagram.com/mediasweatshirt/">
        <FontAwesomeIcon width="16" icon={["fab", "instagram"]} />
      </a>
      
      <a title="linkedin" href="https://www.linkedin.com/mediasweatshirt/">
        <FontAwesomeIcon width="16" icon={["fab", "linkedin"]} />
      </a>
    </SocialIconsGrid>
  );
};

export default SocialIcons;

const SocialIconsGrid = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;

a{
  padding: 0.5em;
  margin: 1em;
  display: flex;
  align-items: center;
  justify-content: center;


  transition: 100ms;
  svg{
    transition: 100ms;

    color: ${(props) => props.color || "#fff"};
    width: ${(props) => props.width || "1.5rem"};

  }

  &:hover{

    svg{
      color: var(--mainColor);
    }
  }
}

`;
