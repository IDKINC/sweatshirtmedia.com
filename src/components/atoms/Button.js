import React from "react";
import styled from "styled-components";

import { breakpoints } from "../breakpoints";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  padding: 0.5em;
  border-radius: var(--borderRadius);

  width: 100%;
  text-align: center;
  transition: 100ms;
  color: #fff;
  background: var(--mainColor);
  font-weight: 900;
  position: relative;
  z-index: 2;


 &:before {
    content: "";
    position: absolute;
    display: block;
    width: 0%;
    height: 100%;
    background: white;
    border-radius: var(--borderRadius);
    transition: 300ms;
    z-index: -1;
    left: 0;
    top: 50%;
    transform: translate(0%, -50%);
    transform-origin: 0% 50%;

  }

  &:hover {
    color: var(--darkerColor);
    /* background: var(--darkerColor); */
     &:before {
      width: 100%;
      height: 100%;
    border-radius: var(--borderRadius) ;

    }
  }

  &:focus {
    outline: 1px dotted #000;
    color: inherit;
  }

  &:active {
    background: var(--darkerColor);
    opacity: 0.8;
    color: inherit;
  }

  &.button--white {
    border: 1px solid #fff;
    background: none;
    font-weight: 400;

    &:before{
      background: var(--mainColor);
      opacity: 0.5;
    }

    &:hover {
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
    }
  }

  &.button--medium {
  }
  &.button--large {
    font-size: 1rem;
    width: 100%;
    font-weight: 900;

    @media ${breakpoints.laptop} {
      font-size: 1.5em;
      padding: 0.5rem 2rem;
    }
  }
`;

const StyledButton = styled(StyledLink)`
  border: none;
  cursor: pointer;
`;

const Button = ({
  to,
  onClick,
  style,
  label,
  type,
  size = "medium",
  white = false,
}) => {
  const computedClass =
    "button button--" + size + (white ? " button--white" : "");

  let RenderedButton = (
    <StyledLink to={to} style={{ ...style }} className={computedClass}>
      {label}
    </StyledLink>
  );

  if (type === "submit") {
    RenderedButton = (
      <StyledButton type="submit" className={computedClass}>
        {label}
      </StyledButton>
    );
  }
  return RenderedButton;
};

export default Button;
