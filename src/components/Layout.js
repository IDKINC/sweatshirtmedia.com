import React, { useState } from "react";
import Footer from "../components/Footer";
import "./all.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./FontAwesome";
import Header from "./common/Header";
const TemplateWrapper = ({
  children,
  noHeader = false,
  noFooter = false,
  cta = true,
  whiteIcon = false,
  backButton = false,
  backgroundHeader = true,
}) => {

  const [isHeaderOpen, setIsHeaderOpen] = useState(false)
  return (
    <>
      <svg
      style={{display: "none"}}
      width="0"
      height="0"
      >
        <defs>
        <clipPath id="collar">
          <ellipse cx="50%"cy="0" rx="35%" ry="100%" fill="#f00" />
          </clipPath>
        </defs>
      </svg>

      <div>
        {!noHeader && (
          <Header
            whiteIcon={whiteIcon}
            backButton={backButton}
            backgroundHeader={backgroundHeader}
            isHeaderOpen={isHeaderOpen}
            setIsHeaderOpen={setIsHeaderOpen}
          />
        )}
        <main>{children}</main>
        {!noFooter && <Footer cta={cta} />}
      </div>
    </>
  );
};

export default TemplateWrapper;
