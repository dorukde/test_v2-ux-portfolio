import React from 'react'
import { Link } from 'gatsby'
import {
  FaLinkedin,
  FaGithubSquare,
  FaSkype,
  FaInstagram,
  FaDribbbleSquare,
} from 'react-icons/fa'
import ResumeItem from '../components/resume'
import ResumeItem2 from '../components/resume2'
import ResumeItem3 from '../components/resume3'
import '../components/resume.css'
import '../components/project.css'
import HText1 from '../components/text1'
import Text2 from '../components/text2'
import Header2 from '../components/header2'

import Scroller from '../components/scrollP'

const AboutPage = () => (
  <div id="rect">
    <Scroller />
    <div className="HeroAbout">
      <div className="AboutW">
        <div className="About">
          <div id="AnimateImage" />
          <h4>
            Hi, This is Doruk!
            <br />
            I'm a digital product designer based in Sydney{' '}
            <span role="img" aria-label="koala">
              🐨
            </span>
            <br />
            focused on building inclusive &amp; accessible products.
            <br /> <br />I love funk, jazz, soul, my{' '}
            <span role="img" aria-label="cat">
              🐈
            </span>
            , documentary photography, <br />
            art-house, crafty food &amp; 90's{' '}
            <span role="img" aria-label="basketball">
              🏀
            </span>
            .
          </h4>
          <br />
          <h4>
            You can download my <a href="/Resume_DD.pdf"> Resume</a>
            <br />
            <br />
            Get in touch with me at
            <br />
            <a href="mailto:hello@dorukdemircioglu.com">
              hello@dorukdemircioglu.com
            </a>
            <br />
          </h4>
          <h2>
            <a
              href="https://linkedin.com/in/dorukdemircioglu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>{' '}
            &nbsp;{' '}
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
      <div className="ContentW">
        <div className="Content">
          <div className="SectionTitle">Experience</div>
          <ResumeItem
            MyRole="Digital Product Designer, UX"
            Workplace="Antler"
            Duration="2019/12 &#x2013; ongoing"
            City="Sydney, Australia"
            Item1="Design system and product design of the open-source project: firetable.io"
            Item2="Founder Hub, Antler Fusion and antler.co redesign"
            Item3="Co-design &amp; ideation, IA, journey mapping, designing for accessibility, usability testing 
            Remote design learning activities for the team 
            Coaching sessions for portfolio companies"
          />
          <ResumeItem
            MyRole="UX Designer"
            Workplace="2hats"
            Duration="2019/5 &#x2013; 2019/12"
            City="Sydney, Australia"
            Item1="Research (Interviews, practice-based research)"
            Item2="Journey mapping, stakeholder mapping, value prop. canvas"
            Item3="Client portal (CRM system, dashboard) 
            Usability testing studies, onboarding stages"
          />
          <ResumeItem
            MyRole="Digital Product Designer, UX (Freelance)"
            Workplace="Strafe"
            Duration="2018/5 &#x2013; 2018/8"
            City="Stockholm, Sweden"
            Item1="Remote user research and usability testing"
            Item2="Designed friends functionality &amp; gamified leaderboard"
            Item3="Interaction design of voting module"
          />
          <ResumeItem
            MyRole="Digital Product Designer, UX"
            Workplace="Keyflow"
            Duration="2015/5 &#x2013; 2018/5"
            City="Stockholm, Sweden"
            Item1="UX, Digital Product: Keyflow &amp; Keyflow Business iOS, Android &amp; Web, usability testing, prototyping"
            Item2="Digital marketing visuals, prints, transactional e-mail design"
            Item3="Visual design of business presentations"
          />
          <ResumeItem
            MyRole="Digital Product Design, UX, Brand"
            Workplace="Streetkäk"
            Duration="2014/2 &#x2013; 2018/6"
            City="Stockholm, Sweden"
            Item1="User research, prototyping, usability studies"
            Item2="UX &amp; UI design of mobile Apps (iOS &amp; Android)"
            Item3="Digital product design, digital and physical marketing and communication collaterals"
          />
          <div className="SectionTitle">Education</div>
          <ResumeItem2
            MyRole="Master of Design – Interaction Design, High Distinction"
            Workplace="UNSW (University of New South Wales)"
            Duration="2018 &#x2013; 2020"
            City="Sydney, Australia"
          />
          <ResumeItem2
            MyRole="M.Sc Materials &amp; Nanotechnology"
            Workplace="Chalmers University of Technology"
            Duration="2009 &#x2013; 2011"
            City="Gothenburg, Sweden"
          />
          <ResumeItem2
            MyRole="B.Eng Chemical Engineering"
            Workplace="Ege University"
            Duration="2003 &#x2013; 2009"
            City="Izmir, Turkey"
          />
          <div className="SectionTitle">Tools &amp; Frameworks</div>
          <ResumeItem3
            MyRole="Visual Design"
            Workplace="Sketch, Figma, Adobe CC (XD, Ps, Ai, Pr, Lr, Id), C4D, Maya, Pencil(s) &amp; Sketchbook"
          />
          <ResumeItem3
            MyRole="Prototyping &amp; Testing"
            Workplace="ProtoPie, Principle, Framer, Max/MSP, Unity, Maze, Smartlook"
          />
          <ResumeItem3
            MyRole="Design System &amp; Documentation"
            Workplace="Zeplin, zeroheight, DSM, Confluence"
          />
          <ResumeItem3
            MyRole="3D Modelling"
            Workplace="Autodesk Maya, Fusion 360, Cinema 4D"
          />
          <ResumeItem3
            MyRole="Software Development"
            Workplace="Arduino programming, HTML, CSS, JS, React, p5.js"
          />
        </div>
      </div>
    </div>
  </div>
)

export default AboutPage
