import React from "react";
import styled from "styled-components";

const Clock = ({ time, city }) => {
  return (
    <ClockWrapper>
      <div class="wrap">
        <span class="hour"></span>
        <span class="minute"></span>
        <span class="second"></span>
        <span class="dot"></span>
      </div>
    </ClockWrapper>
  );
};

export default Clock;

const ClockWrapper = styled.div`
  border: 5px solid black;
  box-shadow:2px 3px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 100%;
  
  
  .wrap {
    background: #fff;
    overflow: hidden;
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: 100%;
  }

  .minute,
  .hour {
    position: absolute;
    height: 100px;
    width: 6px;
    margin: auto;
    top: -27%;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    transform-origin: bottom center;
    transform: rotate(0deg);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  .minute {
    position: absolute;
    height: 130px;
    width: 4px;
    top: -38%;
    left: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    transform: rotate(90deg);
  }

  .second {
    position: absolute;
    height: 90px;
    width: 2px;
    margin: auto;
    top: -26%;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: 4px;
    background: #ff4b3e;
    transform-origin: bottom center;
    transform: rotate(180deg);
    z-index: 1;
  }

  .dot {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 100px;
    background: white;
    border: 2px solid #1b1b1b;
    border-radius: 100px;
    margin: auto;
    z-index: 1;
  }
`;
