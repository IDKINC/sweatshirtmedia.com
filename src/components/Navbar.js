import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import styled from 'styled-components'

import { breakpoints } from "./breakpoints"


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo src={logo} alt="Sweatshirt" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/portfolio">
                portfolio
              </Link>
              <Link className="navbar-item" to="/team">
                team
              </Link>
              <Link className="navbar-item" to="/about">
                about
              </Link>
              <Link className="navbar-item" to="/contact">
                contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar


const Logo = styled.img`

width: 50vw;
filter: invert(1);
max-height: 100%!important;

@media ${breakpoints.laptop} {

  width: 20vw;
}


`