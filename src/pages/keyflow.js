import React from 'react'
import Link from 'gatsby-link'
import {FaGooglePlay, FaApple} from 'react-icons/fa';
import '../components/projectpage.css' 

const KeyflowPage = () => (
  <div id='HeroAbout2' className="HeroAbout">
    <div className="AboutTopW">
      <div className="AboutTop">
        <div className="ProjectTitle">
            <div className="ProjectName">
            Keyflow
            </div>
            <div className="ProjectDetail">
            UX-UI
            </div>
        </div>
          <h2><Link><FaApple /></Link> &nbsp;<Link><FaGooglePlay /></Link></h2>         
      </div>
    </div>
  </div>
)

export default KeyflowPage
