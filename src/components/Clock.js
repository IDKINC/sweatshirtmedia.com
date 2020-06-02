import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Clock from "react-live-clock";
import { breakpoints } from "./breakpoints";



const ClockComponent = ({ tzOffset, city, onClick, selected }) => {
  const [value, setValue] = useState(0);

  
  return (
    <ClockWrapper onClick={onClick} className={selected? "selected" : ""}>
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
  text-align: left;

  text-transform: lowercase;
  /* margin: 15px 0; */
  padding: 0.5rem;
  position: relative;
  transition: 300ms;

  

  &:hover{
  }

  @media ${breakpoints.laptop} {

    text-align: left;

   

  }

  &.selected{
    border-bottom: 3px solid var(--mainColor);
    time{
      font-weight: bold;
      color: var(--mainColor);
    }
    
  }


`;
