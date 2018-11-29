import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
    <div className="Header">
    <div className="HeaderWrapper">
      <div className="home">
      <Link to="/">Doruk Demircioglu</Link>
      </div>
      <div className="navo">
          <Link to="/about">ABOUT</Link>
          <Link to="/">WORKS</Link>
      </div>
    </div>
  </div>
)

export default Header
