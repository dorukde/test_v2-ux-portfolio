import React from 'react'
import { Link, graphql } from 'gatsby'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

import '../components/projectpage.css'
import Img from 'gatsby-image'

/*TEXT COMPONENTS */
import HText1 from '../components/text1'
import Text2 from '../components/text2'
import TextLi from '../components/textLi'
import BTextA from '../components/btn1'
import BTextB from '../components/btn2'

import kvideo1 from '../images/keyflow0.mp4'
import kvideo2 from '../images/keyflow1.mp4'
import kvideo3 from '../images/keyflow2.mp4'

import ktvideo1 from '../images/poster/keyflow0.png'
import ktvideo2 from '../images/poster/keyflow1.png'
import ktvideo3 from '../images/poster/keyflow2.png'

/*TESTING */

import Scroller from '../components/scrollP'

const keyflowPage = props => (
  <div id="rect">
    <Scroller />
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
          </div>{' '}
          <h1>
            <a
              href="https://itunes.apple.com/app/keyflow-your-key-to-nightlife/id963685753?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaApple />
            </a>{' '}
            <a
              href="https://play.google.com/store/apps/details?id=se.keyflow.android.guest&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay />
            </a>
            <div className="infobox">
              <div className="textbold">Platform:</div> iOS/Android &amp; Web{' '}
              <br />
              <div className="textbold">Duration:</div> 2015/5 – 2018/8 <br />
              <div className="textbold">Role:</div> Product Designer (B2C)
              <br />
              <div className="textbold">Method:</div> Agile + Lean UX <br />
            </div>
          </h1>
        </div>
      </div>

      <div className="ContentW">
        <div className="Content">
          <div className="infobox2">
            <div className="textbold">Platform:</div> iOS/Android & Web <br />
            <div className="textbold">Duration:</div> 2015/5 – 2018/8 <br />
            <div className="textbold">Role:</div> Product Designer (B2C)
            <br />
            <div className="textbold">Method:</div> Agile + Lean UX
            <br />
          </div>
          <div className="SectionTitle2">Introduction</div>
          <HText1
            Header1="Digitalisation of Nightlife in the Social Media Age"
            Text1="Nightlife is seriously fun and having access to it can sometimes be challenging. Every guest seeks to have the access to a uniquely fun experience. Keyflow was inspired by solving the complicated problems of nightlife, aiming to make the fun of nightlife accessible. Guests and venues have specific requirements and finding the right fit makes the night fun for everyone. Keyflow Team includes night-life professionals who has access to a focus-group of venues and night-life guests. The solutions come with an integrated 2-layered nightlife ecosystem:"
          />{' '}
          <br />
          <TextLi TextLi="Keyflow App for guests to discover events, manage VIP cards, invite friends and get admissions." />
          <TextLi TextLi="Keyflow Business helping venues to create events, manage lists, sell admissions and collect meaningful pre-event and after-event data." />
          <br />
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.kfOne.childImageSharp.fluid}
              alt="Keyflow App"
            />
            <Img
              fluid={props.data.kfTwo.childImageSharp.fluid}
              alt="Keyflow Business"
            />
          </div>
          <HText1
            Header1="The Problem"
            Text1="Accessing a venue or having deep information on what happens in a city is too complicated for guests. It takes several trial &amp; errors, long timespans waiting at the queue. Booking a table with friends, connecting to a promoter or noticing the venue as a VIP guest need quick solutions. There are various obstacles against every type of nightlife guest:"
          />{' '}
          <br />
          <TextLi TextLi="Guests seek transparency. They need to know about the atmosphere, dress code and avoid being rejected at the door." />
          <TextLi TextLi="Booking a table, planning a night out with friends require lots of phone calls and making a comparison between venues is time-consuming." />
          <TextLi TextLi="Some venues have long queues at the door, which takes the fun away from nightlife. Getting an admission should be time-efficient and hassle-free." />
          <Img
            fluid={props.data.kfNine.childImageSharp.fluid}
            alt="Keyflow Ecosystem"
          />
          <HText1
            Header1="The Solution: Keyflow"
            Text1="Keyflow helps guests discover, get and share friction-free access to a wide-range of nightclubs. Guests have the power to pre-manage the night out without any surprises. Guests can request to be on the list, have digital VIP cards, pre-order table service, skip the queue and get admission for their friends. Keyflow also provides a discovery platform for nightlife guests. Keyflow's benefits for the guests are:"
          />{' '}
          <br />
          <TextLi TextLi="Getting access to venues on a global scale, finding the inspiring events conveniently." />
          <TextLi TextLi="Planning-ahead individually or as a group of friends, sharing digital tickets." />
          <TextLi TextLi="Empowering guests when getting admissions and booking tables with flexibility." />
          <TextLi TextLi="Skipping the queue-line, pre-event communication with the venue." />
          <Img
            fluid={props.data.kfSeven.childImageSharp.fluid}
            alt="Keyflow App (iOS)"
          />
          <Img
            fluid={props.data.kfTen.childImageSharp.fluid}
            alt="Keyflow Web (landing)"
          />
          <div className="SectionTitle2">The Process</div>
          <p>
            <strong>Research:</strong> Contextual Analysis, Surveys (guests
            &amp; venues), Periodic Interviews (venue staff), Focus groups (e.g.
            Creatives, VIP guests), Data Analytics
            <br />
            <strong>Ideas:</strong> Mind Map, Empathy Map, User Journey Map,
            Personas
            <br />
            <strong>Design:</strong> Storyboarding, Design for Accessibility
            &amp; Localisation, Heuristic Evaluation, Sketching, Wireframing
            &amp; Zeplin, Documentation (Confluence)
            <br />
            <strong>Prototype:</strong> High Fidelity Prototype, Working
            Prototype (Staging)
            <br />
            <strong>Test-Produce-Evaluate:</strong> User Testing (individual
            &amp; groups), Experience Sampling, Field (Feature) Testing (sober
            &amp; drunk), Functional Testing, Testing &amp; Bug Reporting (JIRA)
            <br />
          </p>
          <HText1
            Header1="Research: Seeing beyond the queue"
            Text1="Thrill of the night might fade out during long queues. Several focus groups for being able to analyse needs of a wide-range of nightlife guests. A group of creatives were invited to the workshops to understand the needs of guests and the venues. VIP-Guests answered surveys about VIP-Card privileges, sharing privileges with friends and requesting from venues. Keyflow has also ran private-events (e.g. Absolut Nights, Marshall Headphones) to connect with nightclub owners in Sweden - also a chance to test new features and collect user-feedback. Decision and schedule of features have been based on these research insights, as well as data gathered using analytics from Apps &amp; web platform. "
          />
          <HText1
            Header1="Ideas: From pre-party to 'story-to-tell'"
            Text1="To have a deeper understanding of the journey of guests, we worked along personas of young-creatives, VIP guests and built empathy &amp; user-journey maps. The ideation process has helped us define a smart way of defining events and admission types. Building a framework of a new iconography and creating tags for atmosphere &amp; music preferences. Tags would help defining venue atmosphere and match guest preferences to provide a better discovery experience."
          />
          <br />
          <br />
          <Img
            fluid={props.data.kfSix.childImageSharp.fluid}
            alt="Keyflow - iconography"
          />
          <Text2 Text2="Transparency has been the focal-point to find the matching experience. The idea behind 'Guest list request' feature, was to remove the gap between guests and the venues before the night. Even though, loyalty is already being tracked and rewarded by Keyflow, guests need earlier answers before waiting in the queue to plan their night-out. Admission types and ticketing options have developed, and request feature has been iteratively improving since the introduction. Layers of business-logic, transactional communication, functional dependencies were also considered at the end of every ideation session." />
          <br />
          <br />
          <Img
            fluid={props.data.kfEight.childImageSharp.fluid}
            alt="Transactional Flow"
          />
          <HText1
            Header1="Designing Keyflow App &amp; Web"
            Text1="My role in the team as the only product designer required collaboration with several stakeholders including members from sales-marketing team, project management and 8+ developers (native mobile &amp; web). Keyflow has been a scalable and multi-lingual product from its earlier steps. The earliest visual-iterations has been about improving core-functional requirements about multi-platform and multi-lingual support of the products. Building a design system, started with a sketch component-library, continued with Confluence documentation and workshops with developers."
          />{' '}
          <br />
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.kfFour.childImageSharp.fluid}
              alt="Keyflow App - Sketches"
            />
            <Img
              fluid={props.data.kfFive.childImageSharp.fluid}
              alt="Keyflow App - Board User Flow"
            />
          </div>
          <br />
          <Text2 Text2="Design details of new features were presented to relevant stakeholders before each sprint, periodically. This helped creating a sprint-based workflow and delivery of assets on Zeplin. The component-libraries, guidelines, app-store images and onboarding assets were also periodically updated. Periodic presentations and workshops with other stakeholders helped preventing bugs, creating better data-collection points in the product and keep visual and functional consistency." />
          <br />
          <Img
            fluid={props.data.kfThree.childImageSharp.fluid}
            alt="Keyflow App - Flow Diagram"
          />
          <Img
            fluid={props.data.kfEleven.childImageSharp.fluid}
            alt="Keyflow App - Flow Diagram"
          />
          <HText1
            Header1="Test - Produce - Evaluate"
            Text1="Testing of new-releases at Keyflow started with internal-testing on the staging environment where edge-cases were continuously created, and early bugs were reported. Further field-tests took place in person during office-hours and nightlife events. Major features such as RSVP or QR-code tickets required field-testing in event conditions, where a doorman, an event manager and number of guests were required. Keyflow team had the chance to collaborate with brands like Absolut, Marshall, Peroni and Universal Studios for being able to host nightlife professionals to hold feature-tests to gain meaningful insights and user-feedbacks from professionals. Handling of invitations, listing of events and intrusiveness of advertisements were prototyped in Principle App for micro-interactions. 
            "
          />
          <br />
          <div className="prototypes">
            <div className="prototype1">
              <video
                poster={ktvideo1}
                preload="auto"
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={kvideo1} />
              </video>
            </div>
            <div className="prototype1">
              <video
                poster={ktvideo2}
                preload="auto"
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={kvideo2} />
              </video>{' '}
            </div>
            <div className="prototype1">
              <video
                poster={ktvideo3}
                preload="auto"
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={kvideo3} />
              </video>{' '}
            </div>
          </div>
          <br />
          <HText1
            Header1="Conclusions"
            Text1="Keyflow is currently the main nightlife platform of Scandinavia with a growing number of guests who discover nightlife events and venues through the platform. As an integrated nightlife solution, the product has branched to provide unique solutions to the needs of various types of guests. Team's understanding has increased as the product and user-base has grown. Request feature has been the most significant disruption in the industry and its development has not continued as a straight-line. Introduction of Keyflow Coins was based on surveys and user-interviews to help venues engage more with guest list requests. Coins would add value to the requests, save time for venues and help gathering user information and reward mechanism. Even though introduction of Coins has increased request-engagement on both sides (guests &amp; venues), it proved to have room for improvement to reach a wider-audience. Keyflow has come with a newer and transparent approach to increase request engagement by making changes on Keyflow Business (venue response rate). Nightlife dynamics show a large variety globally, and Keyflow has following challenges:"
          />
          <br />
          <TextLi TextLi="Nightlife trends are changing, as open-air and festival-like events increasingly become popular." />
          <TextLi TextLi="Providing value and localising the product would need re-defining business models and product features (e.g. Japanese nightlife culture being different from Scandinavia)." />
          <TextLi TextLi="Current social media platforms do not meet the needs of nightlife habitat. However, different demographics display different needs. The product in the future would need to branch more towards finding unique solutions for VIP's, creatives, festival lovers, etc. " />
          <div className="BWrapper">
            <Link to="/strafe">
              <BTextA BHeader1="⟵ Previous" BText1="Strafe" />
            </Link>
            <Link to="/keyflowbusiness">
              <BTextB BHeader2="Next ⟶" BText2="Keyflow Business" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default keyflowPage

export const pageQuery = graphql`
  query {
    kfOne: file(relativePath: { eq: "kf1.jpg" }) {
      ...fluidImage2
    }
    kfTwo: file(relativePath: { eq: "kfTwo.jpg" }) {
      ...fluidImage2
    }
    kfThree: file(relativePath: { eq: "kf3a.jpg" }) {
      ...fluidImage
    }
    kfFour: file(relativePath: { eq: "kf4.jpg" }) {
      ...fluidImage480
    }
    kfFive: file(relativePath: { eq: "kf5.jpg" }) {
      ...fluidImage480
    }
    kfSix: file(relativePath: { eq: "kf_icons.jpg" }) {
      ...fluidImage
    }
    kfSeven: file(relativePath: { eq: "kf_app.jpg" }) {
      ...fluidImage
    }
    kfEight: file(relativePath: { eq: "kf3b.jpg" }) {
      ...fluidImage
    }
    kfNine: file(relativePath: { eq: "kf3c.jpg" }) {
      ...fluidImage
    }
    kfTen: file(relativePath: { eq: "kf_web.jpg" }) {
      ...fluidImage
    }
    kfEleven: file(relativePath: { eq: "kf_venues.jpg" }) {
      ...fluidImage
    }
  }
`
