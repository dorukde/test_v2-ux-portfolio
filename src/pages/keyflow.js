import React from 'react'
import Link from 'gatsby-link'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import '../components/projectpage.css'

/*TESTING */
import ResumeItem from '../components/resume'

const keyflowPage = () => (
  <div id="HeroAbout2" className="HeroAbout">
    <div className="AboutW">
      <div className="AboutProject">
        <div className="ProjectTitle">
          <div className="ProjectName2">Key&#64258;ow</div>
          <div className="ProjectDetail2">UX-UI</div>
        </div>
        <div className="ProjectDescription">
          Keyflow, headquartered in Stockholm Sweden, is an event service
          solution for both event producers and guests around the globe.
        </div>
        <h1>
          <Link>
            <FaApple />
          </Link>{' '}
          <Link>
            <FaGooglePlay />
          </Link>
          <div className="infobox">
            <div className="textbold">Platform:</div> iOS/Android & Web <br />
            <div className="textbold">Duration:</div> 2015/5 – 2018/5 <br />
            <div className="textbold">Role:</div> Product Designer <br />
            <div className="textbold">Method:</div> Lean UX <br />
          </div>
        </h1>
      </div>
    </div>
    <div className="ContentW">
      <div className="Content">
        <div className="infobox2">
          <div className="textbold">Platform:</div> iOS/Android & Web <br />
          <div className="textbold">Duration:</div> 2015/5 – 2018/5 <br />
          <div className="textbold">Role:</div> Product Designer <br />
          <div className="textbold">Method:</div> Lean UX <br />
        </div>
        <div className="SectionTitle">Keyflow for Guests</div>
        <ResumeItem
          MyRole="Digital Product Design (Freelance)"
          Workplace="Strafe"
          Duration="2018/5 &#x2013; 2018/8"
          City="Stockholm, Sweden"
          Item1="Planning &amp; Conducting User Research"
          Item2="New Features: Friends Functionality &amp; Gamified leaderboard"
          Item3="New voting module"
        />
        <ResumeItem
          MyRole="Digital Product Design, UX-UI Design"
          Workplace="Keyflow"
          Duration="2015/5 &#x2013; 2018/5"
          City="Stockholm, Sweden"
          Item1="UX-UI Design for Keyflow &amp; Keyflow Business Apps/web"
          Item2="Digital marketing visuals, prints, e-mail template"
          Item3="Visual design of business presentations"
        />
        <ResumeItem
          MyRole="Digital Product Design, UX-UI Design"
          Workplace="Keyflow"
          Duration="2015/5 &#x2013; 2018/5"
          City="Stockholm, Sweden"
          Item1="UX-UI Design for Keyflow &amp; Keyflow Business Apps/web"
          Item2="Digital marketing visuals, prints, e-mail template"
          Item3="Visual design of business presentations"
        />
      </div>
    </div>
  </div>
)

export default keyflowPage
