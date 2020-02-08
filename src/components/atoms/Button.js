import React from "react"
import styled from "styled-components"

import { breakpoints } from "../breakpoints"
import { Link } from "gatsby"

const StyledLink = styled(Link)`
color: inherit;
text-decoration: none;
padding: 0.5em;
border-radius: var(--borderRadius);

width: 100%;
text-align: center;
transition: 100ms;
margin-bottom: 1em;
color: #fff;
background: var(--mainColor);

&:hover{
  color: #fff;
  background: var(--darkerColor);
}



&.button--white{

  border: 1px solid #fff;
  background: none;

  &:hover{
    background: rgba(255,255,255,0.2);
  }

}





&.button--medium{
}
&.button--large{
  font-size: 1rem;
  width: 100%;
  font-weight: 900;

  @media ${breakpoints.laptop} {
    font-size: 1.5em;
  }
}
`


const StyledButton = styled.button`
color: inherit;
text-decoration: none;
padding: 0.5em;
border-radius: var(--borderRadius);

width: 100%;
text-align: center;
transition: 100ms;
margin-bottom: 1em;
color: #fff;
background: var(--mainColor);
border: none;
cursor: pointer;

&:hover{
  color: #fff;
  background: var(--darkerColor);
}



&.button--white{

  border: 1px solid #fff;
  background: none;

  &:hover{
    background: rgba(255,255,255,0.2);
  }

}





&.button--medium{
}

&.button--large{
  font-size: 1rem;
  width: 100%;
  font-weight: 900;

  @media ${breakpoints.laptop} {
    font-size: 1.5em;
  }
}
`

const Button = ({ to, onClick, style, label, type, size="medium", white=false }) => {

  const computedClass = "button--" + size + (white ? " button--white" : "")

  let RenderedButton = <StyledLink to={to} style={{...style}} className={computedClass}>{label}</StyledLink>

  if (type === "submit") {RenderedButton = <StyledButton type="submit" className={computedClass}>{label}</StyledButton>}
  return(RenderedButton)
}

export default Button
