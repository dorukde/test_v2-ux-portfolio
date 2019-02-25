import React from 'react'
import { Link } from 'gatsby'
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderWrapper">
      <div className="home">
        <Link to="/">Doruk Demircioglu</Link>
      </div>
      <nav className="navo">
        <Link to="/about" id="other">
          ABOUT
        </Link>
        <Link to="/" id="selected">
          WORKS
        </Link>
      </nav>
    </div>
  </div>
)

export default Header
