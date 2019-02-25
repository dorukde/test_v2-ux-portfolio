import React from 'react'
import Link from 'gatsby-link'
import './header2.css'

const Header2 = ({ siteTitle }) => (
  <div className="Header2">
    <div className="HeaderWrapper2">
      <div className="home2">
        <Link to="/">Doruk Demircioglu</Link>
      </div>
      <nav className="navo2">
        <Link to="/about" id="selected2">
          ABOUT
        </Link>
        <Link to="/">WORKS</Link>
      </nav>
    </div>
  </div>
)

export default Header2
