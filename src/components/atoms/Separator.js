import React from "react";
import styled from "styled-components";

const Separator = ({ flipped, color="#ffffff", style={} }) => {
  const path = flipped ? "polygon(0 0, 100% 0, 100% 50%, 0% 100%)" : "polygon(0 0, 100% 50%, 100% 100%, 0% 100%)";
  return (
    <SeparatorWrapper flipped={flipped} path={path} color={color} style={{...style}}>
    </SeparatorWrapper>
  );
};

export default Separator;

const SeparatorWrapper = styled.div`
  position: absolute;

  top: ${(props) => (props.flipped ? "-1px" : "unset")};
  bottom: ${(props) => (props.flipped ? "unset" : "-1px")}; 

  clip-path: ${(props)=>(props.path ? props.path : "")};

  left: 0;
  width: 100%;
  height: 5vw;
  z-index: 1;

background: ${(props) => (props.color ? props.color : "var(--mainColor)")};
`;
