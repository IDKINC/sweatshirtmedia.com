import React from "react";
import styled from "styled-components";

import { breakpoints } from "../breakpoints";

const StyledFlex = styled.div`
  padding: 0.5em;
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media ${breakpoints.laptop} {
    flex-direction: row;
  }

  .featured {
    @media ${breakpoints.laptop} {
      grid-column: span 2;
      grid-row: span 2;
      font-size: 1.5em;
    }
  }
`;

const Flex = ({ children, col, style }) => (
  <StyledFlex col={col} style={style}>
    {children}
  </StyledFlex>
);

export default Flex;
