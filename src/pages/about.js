import React from 'react'
import { Link } from 'gatsby'
import { FaLinkedin, FaGithubSquare, FaSkype, FaInstagram, FaDribbbleSquare } from 'react-icons/fa'
import ResumeItem from '../components/resume'
import ResumeItem2 from '../components/resume2'
import ResumeItem3 from '../components/resume3'
import '../components/resume.css'


const AboutPage = () => (
 
  <div id='HeroAbout2' className="HeroAbout">
    <div className="AboutTopW"> 
      <div className="AboutTop">
        <h4>
          <br />
          <div id="AnimateImage"></div>
          <br />
          <br />
          Hi, This is Doruk!<br />
          I'm a digital product designer based in Sydney <span role="img" aria-label="koala">🐨</span><br />focused on building inclusive &amp; accessible products.<br /> <br />
          I love funk, jazz, soul, my <span role="img" aria-label="cat">🐈</span>, documentary photography, <br />art-house, crafty food &amp; 90's <span role="img" aria-label="basketball">🏀</span>.
        </h4><br />
        <h4>
          You can download my <Link> Resume</Link><br /><br />
          Get in touch with me at<br />
          <a href="mailto:hello@dorukdemircioglu.com">hello@dorukdemircioglu.com</a><br />
          <h2><a href="https://linkedin.com/in/dorukdemircioglu" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> &nbsp; <a href="https://instagram.com/dorukde/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></h2>
        </h4>
      </div>
    </div>
    <div className="ContentW"> 
      <div className="Content">
        <div className="SectionTitle">Experience</div>
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
          MyRole="Digital Product Design, UX-UI Design, Branding"
          Workplace="Streetkäk"
          Duration="2013 &#x2013; Present"
          City="Stockholm, Sweden"
          Item1="UX-UI Design for native mobile Apps for end-users and truck-owners"
          Item2="Branding &amp; art direction of events, video production"
          Item3="Digital and physical marketing visuals design"
        />
        <div className="SectionTitle">Education</div>
        <ResumeItem2
          MyRole="Master of Design"
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

        <div className="SectionTitle">Tools</div>
        <ResumeItem3
          MyRole="Design"
          Workplace="Sketch, Figma, Framer, Adobe CC (XD, Ps, Ai, Pr, Lr), C4D, Maya, Pencil(s) &amp; Sketchbook"
        />
        <ResumeItem3
          MyRole="Prototyping"
          Workplace="Zeplin, Principle, InVision, Framer, html + CSS + JS, React (basic)"
        />
      </div>
    </div>
  </div>

)

export default AboutPage
