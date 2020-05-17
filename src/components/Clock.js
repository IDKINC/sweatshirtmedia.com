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
  margin: 15px 0.5em;
  position: relative;
  color: #fff;
  cursor: pointer;

  &:after{
    content: '';

    width: 25%;
    height: 3px;
    background: #fff;
    position: absolute;
    bottom: -7.5px;
  }

  @media ${breakpoints.laptop} {

    text-align: left;

    &:after{
      left: 0;
    }

  }

  &.selected{
    time{
      font-weight: bold;
    }

    &:after{
      background: var(--mainColor);
    }
  }


`;
