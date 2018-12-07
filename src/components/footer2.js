import React from 'react'
import { Link } from 'gatsby'
import './footer2.css'
import {
  FaLinkedin,
  FaGithubSquare,
  FaSkype,
  FaInstagram,
  FaDribbbleSquare,
} from 'react-icons/fa'

const Footer2 = ({ siteTitle }) => (
  <div className="Footer2">
    <div className="FooterWrapper2">
      <div className="year2">
        <a
          href="https://github.com/dorukde/ux-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{' '}
          <span role="img" aria-label="cat">
            🐈
          </span>{' '}
          &amp; Doruk
        </a>
      </div>
      <div className="bottom_right2">
        <h2>
          <a
            href="https://linkedin.com/in/dorukdemircioglu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>{' '}
          <a
            href="https://instagram.com/dorukde/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </h2>
      </div>
    </div>
  </div>
)

export default Footer2
