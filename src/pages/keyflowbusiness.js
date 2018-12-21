import React from 'react'
import { Link, graphql } from 'gatsby'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

import '../components/projectpage.css'
import Img from 'gatsby-image'

/*TEXT COMPONENTS */
import HText1 from '../components/text1'
import TextLi from '../components/textLi'
import BTextA from '../components/btn1'
import BTextB from '../components/btn2'

/*TESTING */

import Scroller from '../components/scrollP'

import kbvideo1 from '../images/kbusiness_1d.mp4'
import kbvideo2 from '../images/kbusiness_1.mp4'

import kbtvideo1 from '../images/poster/kbusiness0.png'
import kbtvideo2 from '../images/poster/kbusiness1.png'

const keyflowBPage = props => (
  <div id="rect">
    <Scroller />
    <div id="HeroAbout2" className="HeroAbout">
      <div className="AboutW">
        <div className="AboutProject">
          <div className="ProjectTitle">
            <div className="ProjectName2">Key&#64258;ow Business</div>
            <div className="ProjectDetail2">UX-UI</div>
          </div>
          <div className="ProjectDescription">
            Keyflow Business, is the solution for pre-event and real-time guest
            list management of each event of a nightclub. It features guest-list
            management, offline support, real-time request handling, considering
            the goals of venue producers and their teams.
          </div>{' '}
          <h1>
            <a
              href="https://itunes.apple.com/app/keyflow-business/id1019105434?mt=8"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaApple />
            </a>{' '}
            <a
              href="https://play.google.com/store/apps/details?id=se.keyflow.android.venue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGooglePlay />
            </a>
            <div className="infobox">
              <div className="textbold">Platform:</div> iOS/Android & Web <br />
              <div className="textbold">Duration:</div> 2015/5 – 2018/8 <br />
              <div className="textbold">Role:</div> Product Designer (B2B){' '}
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
            <div className="textbold">Role:</div> Product Designer (B2B)
            <br />
            <div className="textbold">Method:</div> Agile + Lean UX
            <br />
          </div>
          <div className="SectionTitle2">Introduction</div>
          <HText1
            Header1="Digital Event Management for Nightlife Professionals"
            Text1="Nightlife management and marketing requires a variety of skills in every event production team. Current tools for event management, marketing and data collection lack specificity to solve nightlife venue problems. Keyflow Business  
            is a unique system crafted for different stages of event-production, starting from event planning to data-collection after event. The system empowers venue-staff and gives event managers direct access to venue clientele for business growth with real-time tools utilising Keyflow platform. Keyflow ecosystem aims to close the gap between venue producers and nightlife guests:"
          />{' '}
          <br />
          <TextLi
            TextLi="Keyflow Business is the main platform for venues to create and promote events, track real-time statistics and collect after-event data about past-events.  
          Helping venues to create events, manage lists, sell admissions and collect meaningful pre-event and after-event data."
          />
          <TextLi TextLi="Keyflow App is the platform for guests where events are published, promoted and users have the power to manage their own VIP-cards and invite friends." />
          <br />
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.kbOne.childImageSharp.fluid}
              alt="Keyflow App"
            />
            <Img
              fluid={props.data.kbTwo.childImageSharp.fluid}
              alt="Keyflow Business"
            />
          </div>
          <HText1
            Header1="The Problem"
            Text1="Event production, promotion and management on digital platforms comes with multiple challenges for each team-member. Collecting meaningful information during and after event are essentials to understand what is necessary to grow business, host better events and provide better service for venues. Keyflow Team has held an exclusive research of global nightlife producers with the objective to solve specific problems:"
          />{' '}
          <br />
          <TextLi TextLi="The ideal scenario is to pre-sell admissions and table-bookings to plan ahead for the venues. However, guests tend to inform venues with short notice." />
          <TextLi TextLi="Marketing and promoting events with a nightlife-focused global audience is a challenging process with current tools." />
          <TextLi TextLi="Door service is sensitive, time-consuming and can be frustrating for guests. Guests expect transparent and friction-free experiences at the door." />
          <TextLi TextLi="Analysis of each event help understand the pain-points and make performance analysis — '(VIP) Name +3' provides no information about the group." />
          <Img
            fluid={props.data.kBusinessOne.childImageSharp.fluid}
            alt="Keyflow Business Ecosystem and Features"
          />
          <HText1
            Header1="The Solution: Keyflow Business"
            Text1="Keyflow Business is the streamlined solution for event creation, marketing and analysis for every team member of a venue. Guest-list management, table booking, event-updates, VIP creation and unique 'request' possibility helps guests and venues to plan-ahead for the night. Keyflow Business helps nightlife business producers with:"
          />{' '}
          <br />
          <TextLi TextLi="Getting closer to global-guests, collect information and reward." />
          <TextLi TextLi="Pre-event sales and management to plan-ahead and analyse events and continuous business-growth." />
          <TextLi
            TextLi="
          Empowering every team member with specific tools created for each role (e.g. venue owner, manager, doorman, etc.)."
          />
          <TextLi TextLi="Streamlining event-management with real-time tools (e.g. Requests, Check-in)." />
          <Img
            fluid={props.data.kBusinessTwo.childImageSharp.fluid}
            alt="Keyflow Business Ecosystem and Features"
          />
          <div className="SectionTitle2">The Process</div>
          <p>
            <strong>Research:</strong> Contextual Analysis, Surveys (guests
            &amp; venues), Periodic Interviews (venue staff), Focus groups (e.g.
            Venue owners, Doormen)
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
            &amp; groups), Experience Sampling, Field (Feature) Testing,
            Functional Testing, Testing &amp; Bug Reporting (JIRA)
            <br />
          </p>
          <HText1
            Header1="Research: Thinking Before Dancing"
            Text1="Keyflow has been continuously in contact with event-producers and venues in Stockholm from its start. A focus-group including event-producers, promoters and doormen provided feedbacks for feature decisions and iterative improvements. Having nightlife professionals as Keyflow Team members provided better access to venues and other nightlife-professionals. Offline-support, guest-preferences and tags have been crafted based on focus-groups and individual interviews."
          />
          <HText1
            Header1="Ideas: Creations of the Night"
            Text1="Understanding event production and problems of different personas improved the clarity of ideation process. Event-timeline of a venue manager, event promoter or doormen differ from each other. These branching processes inspired new personas and relevant user-journey maps. Synthesis of user-roles has been an early and important step to provide relevant experiences to every team member later on."
          />
          <Img
            fluid={props.data.kBusinessThree.childImageSharp.fluid}
            alt="Keyflow App - Sketches"
          />
          <Img
            fluid={props.data.kBusinessFour.childImageSharp.fluid}
            alt="Keyflow App - Sketches"
          />
          <br />
          <Img
            fluid={props.data.kBusinessSeven.childImageSharp.fluid}
            alt="Keyflow Business - Web: Request Management"
          />
          <HText1
            Header1="Designing Keyflow Business"
            Text1="The design system (and visual language) of Keyflow Business differs from Keyflow App. Onboarding process involves user-roles and registration of team-members and venues too. The product is designed to be a real-time and collaborative event-management tool with multiple states and edge cases. The visual design process is based on a new design system and sketch component-library with state-indicators for features like offline-support and additional documentation on Confluence. Keyflow Business iterations have been designed and developed simultaneously with guest-focused Keyflow App. Empty-states, in-App onboarding and older-version support have been important considerations during the visual design-process of Keyflow Business."
          />
          <br />
          <br />
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.kBusinessFive.childImageSharp.fluid}
              alt="Keyflow Business: Sketching Event Management System"
            />
            <Img
              fluid={props.data.kBusinessSix.childImageSharp.fluid}
              alt="Keyflow Business: Sketching Statistics"
            />
          </div>
          <br />
          <HText1
            Header1="From Ideation to High-Fidelity Design"
            Text1="Keyflow Business collects and presents several layers of information to venue managers. Check-in Timeline displays real-time check-in data from every team-member using Keyflow Business. Large-scaled venues utilise this information to find the right balance between queue and max. allowed guests inside the venue at the time. Attendance &amp; Activity graphs display how pre-sales and guest lists progress during the night. Finally, admission types are displayed on a daily basis for performance analysis. This analysis helps which events need a boost and which admission types need advertisement through Keyflow Business."
          />
          <br />
          <br />
          <Img
            fluid={props.data.kBusinessEight.childImageSharp.fluid}
            alt="Keyflow Business - Web: Event Statistics"
          />
          <br />
          <Img
            fluid={props.data.kBusinessNine.childImageSharp.fluid}
            alt="Keyflow Business - Web: Marketing Events"
          />
          <HText1
            Header1="Test - Produce - Evaluate"
            Text1="
            At later stages, Keyflow Business has gone through a complete visual re-design with the introduction of a new pricing-model. Larger-sprints in such agile environment require end-to-end testing in staging environment. Internal testing involved multiple team-members testing event creation, ticket scanning and checking-in guests. We also had the chance to run closed-events in collaboration with Absoluit and Marshall where we could work with our focus-groups in a real-venue before the release. Keyflow product has over 200 screens/states accordingly, and inter-screen prototypes were built on inVision, in addition to documentation prepared for relevant stakeholders. Micro-interactions in each screen were prototyped using Principle App."
          />
          <br />
          <div className="prototypes">
            <div className="prototype1">
              <video
                poster={kbtvideo1}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={kbvideo1} />
              </video>
            </div>
            <div className="prototype2">
              <video
                poster={kbtvideo2}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={kbvideo2} />
              </video>
            </div>
          </div>{' '}
          <HText1
            Header1="Conclusions"
            Text1="
            Keyflow Business has introduced a unique way to streamline and analyse nightclub management. Empowerment of team-members of nightclub management has been at the core of the product development process. Being able to plan-ahead for the venues added to the business value. Venues had the chance to collect information to analyse and improve future-events and reward their guests. Request feature has increased transparency with the venue and the guests removing the hassle of having large number of phone calls during preparation phase. Engagement of the guests and venues were improved by 'request response rate', which motivated venues to have a higher transparency rating. Venues in Scandinavia has embraced the product, using a large portion of its features. Nightlife trends are changing and re-defining event production. Keyflow Business as a growing product, would have these challenges at global-scale:"
          />
          <br />
          <TextLi TextLi="Event management of large-audiences (open-air &amp; festivals) require highly-customisable solutions." />
          <TextLi TextLi="Global nightlife practices are different, and price-charts, branding and features would require to be localised as an addition to today's multi-language support." />
          <TextLi TextLi="Design of event-pages and venue-pages are based on largely common social-media content for re-usability and agile-improvement of processes. Social-media integration and management are considerable future-features for the product." />
          <div className="BWrapper">
            <Link to="/keyflow">
              <BTextA BHeader1="⟵ Previous" BText1="Keyflow" />
            </Link>
            <Link to="/streetkak">
              <BTextB BHeader2="Next ⟶" BText2="Streetkäk App" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default keyflowBPage

export const pageQuery = graphql`
  query {
    kBusinessOne: file(relativePath: { eq: "kbusiness1.jpg" }) {
      ...fluidImage
    }
    kBusinessTwo: file(relativePath: { eq: "kb_app.jpg" }) {
      ...fluidImage
    }
    kBusinessThree: file(relativePath: { eq: "kbusiness_flow.jpg" }) {
      ...fluidImage
    }
    kBusinessFour: file(relativePath: { eq: "kbusiness_edit.jpg" }) {
      ...fluidImage
    }
    kBusinessFive: file(relativePath: { eq: "kfb_process1.jpg" }) {
      ...fluidImage
    }
    kBusinessSix: file(relativePath: { eq: "kfb_process2.jpg" }) {
      ...fluidImage
    }
    kBusinessSeven: file(relativePath: { eq: "kfb2.jpg" }) {
      ...fluidImage
    }
    kBusinessEight: file(relativePath: { eq: "kfb_web1.jpg" }) {
      ...fluidImage
    }
    kBusinessNine: file(relativePath: { eq: "kb_market.jpg" }) {
      ...fluidImage
    }
    kbOne: file(relativePath: { eq: "kf2.jpg" }) {
      ...fluidImage2
    }
    kbTwo: file(relativePath: { eq: "kbTwo.jpg" }) {
      ...fluidImage2
    }
  }
`
