import React from "react";
import styled from "styled-components";

const Separator = ({ flipped }) => {
  const path = flipped ? (
    <path
      fill="#ffffff"
      fill-opacity="1"
      d="M1920 90c-703 0-1799.426-155.567-1920 0v-90H1920V90z"
    ></path>
  ) : (
    <path
      fill="#ffffff"
      fill-opacity="1"
      d="M0,0c703,0,1799.426,155.567,1920,0v90H0V0z"
    ></path>
  );
  return (
    <SeparatorWrapper flipped={flipped}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 90"
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
    object-fit: cover;
  }
`;
