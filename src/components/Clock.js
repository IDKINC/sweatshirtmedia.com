import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Clock from "react-live-clock";
import { breakpoints } from "./breakpoints";



const ClockComponent = ({ tzOffset, city }) => {
  const [value, setValue] = useState(0);

  
  return (
    <ClockWrapper>
      <Clock ticking={true} timezone={tzOffset} format={"h:mm a"} style={{textTransform: "full-width"}} />
      {city && <span>{city}</span>}
    </ClockWrapper>
  );
};

export default ClockComponent;

const ClockWrapper = styled.div`
  /* margin: 1em; */
  width: 100%;

  display: flex;
  flex-direction: column;
  text-align: center;

  text-transform: lowercase;

  color: #fff;

  @media ${breakpoints.laptop} {

    text-align: right;

  }
`;
