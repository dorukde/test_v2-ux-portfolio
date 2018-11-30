import React from 'react'
import { Link } from 'gatsby'
import './footer.css'
import {FaLinkedin, FaGithubSquare, FaSkype, FaInstagram, FaDribbbleSquare} from 'react-icons/fa';

const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterWrapper">
      <div className="year">
      <a href="https://github.com/dorukde/ux-portfolio" target="_blank" rel="noopener noreferrer"> © 2018 - Built by<span role="img" aria-label="cat">🐈</span> &amp; Doruk</a>
      </div>
      <div className="bottom_right">
      <h2><a href="https://linkedin.com/in/dorukdemircioglu" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> <a href="https://instagram.com/dorukde/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></h2>      
      </div>
    </div>
  </div>
)

export default Footer
