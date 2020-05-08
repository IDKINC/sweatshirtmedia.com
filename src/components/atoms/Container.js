import styled from "styled-components"

import { breakpoints } from "../breakpoints"


export const Container = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2vh 1vh;
  background: #fff;

  & > h1{
    text-align: center;

    
  @media ${breakpoints.laptop} {
    font-size: 5em;
    }
  }
`