import React from 'react'
import Link from 'gatsby-link'
import './header3.css'

const Header3 = ({ siteTitle }) => (
  <div className="Header3">
    <div className="HeaderWrapper3">
      <div className="home3">
        <Link to="/">Doruk Demircioglu</Link>
      </div>
      <nav className="navo3">
        <Link to="/about">ABOUT</Link>
        <Link to="/">WORKS</Link>
      </nav>
    </div>
  </div>
)

export default Header3
