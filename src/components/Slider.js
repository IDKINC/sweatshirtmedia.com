import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Slide = ({ settings, children }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <StyledSlider>
      <Slider {...defaultSettings} {...settings}>
        {children}
      </Slider>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
width: 100%;
  .slick-slider {
    width: 80%;
    margin: 1em auto;

    .slick-arrow{
      &:before{
        color: #333;
      }
        color: #333;
    }
  }
`;


export default Slide