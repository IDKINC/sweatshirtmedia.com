import React, { useState, useEffect } from "react";
import styled from "styled-components";

import {Clock as ReactClock} from 'react-clock';

const Clock = ({ time, city }) => {

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () => setValue(new Date() ),
      1000
    );

    return () => {
      clearInterval(interval);
    }
  }, []);
  return (
    <ClockWrapper>
  <ReactClock value={value} renderMinuteMarks={false} />
    </ClockWrapper>
  );
};

export default Clock;

const ClockWrapper = styled.div`
  border: 3px solid black;
  box-shadow:2px 3px 8px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  border-radius: 100%;
  margin: 1em;
  
  

`;
