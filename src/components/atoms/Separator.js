import React from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints";

const Separator = ({ flipped, color="#ffffff" }) => {
  const path = flipped ? (
    <path fill={color} fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,224C480,235,600,213,720,192C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>

  ) : (
  <path fill={color} fill-opacity="1" d="M0,128L60,149.3C120,171,240,213,360,224C480,235,600,213,720,192C840,171,960,149,1080,138.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>

  );
  return (
    <SeparatorWrapper flipped={flipped}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {path}
      </svg>
    </SeparatorWrapper>
  );
};

export default Separator;

const SeparatorWrapper = styled.div`
  position: absolute;

  top: ${(props) => (props.flipped ? "-1px" : "unset")};
  bottom: ${(props) => (props.flipped ? "unset" : "-1px")};

  left: 0;
  width: 100%;
  height: 0;
  z-index: 1;

  svg {
    position: absolute;
    top: ${(props) => (props.flipped ? "-1px" : "unset")};
    bottom: ${(props) => (props.flipped ? "unset" : "-1px")};
    left: 0;
    width: 100%;
    height: 5vh;
    object-fit: cover;

    @media ${breakpoints.laptop} {

      height: 15vh;
    }
    
  }
`;
