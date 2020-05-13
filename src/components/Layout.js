import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import './FontAwesome'
const TemplateWrapper = ({ children, noHeader = false, noFooter = false,  cta=true }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      {!noHeader && <Navbar />}
      <main>{children}</main>
      {!noFooter && <Footer cta={cta} />}
    </div>
  )
}

export default TemplateWrapper
