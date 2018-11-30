import React from 'react'
import Link from 'gatsby-link'
import './header2.css'

const Header2 = ({ siteTitle }) => (
  <div className="Header2">
    <div className="HeaderWrapper2">
      <div className="home">
      <Link to="/">Doruk Demircioglu</Link>
      </div>
      <div className="navo2">
          <Link to="/about">ABOUT</Link>
          <Link to="/">WORKS</Link>
      </div>
    </div>
  </div>
  
)

export default Header2