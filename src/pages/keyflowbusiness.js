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

/*TESTING */

import Scroller from '../components/scrollP'

const keyflowPage = props => (
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
            Keyflow, headquartered in Stockholm Sweden, is an event service
            solution for both event producers and guests around the globe.
          </div>{' '}
          <h1>
            <Link>
              <FaApple />
            </Link>{' '}
            <Link>
              <FaGooglePlay />
            </Link>
            <div className="infobox">
              <div className="textbold">Platform:</div> iOS/Android & Web <br />
              <div className="textbold">Duration:</div> 2015/5 – 2018/8 <br />
              <div className="textbold">Role:</div> Product Designer <br />
              <div className="textbold">Method:</div> Agile + Lean UX <br />
            </div>
          </h1>
        </div>
      </div>

      <div className="ContentW">
        <div className="Content">
          <div className="infobox2">
            <div className="textbold">Platform:</div> iOS/Android & Web <br />
            <div className="textbold">Duration:</div> 2015/5 – 2018/12 <br />
            <div className="textbold">Role:</div> Co-Founder, Product Designer
            <br />
            <div className="textbold">Method:</div> Lean UX
            <br />
          </div>
          <div className="SectionTitle2">Introduction</div>
          <HText1
            Header1="Digitalisation of Nightlife in the Age of Social Media"
            Text1="Nightlife is seriously fun and having access to it can be challenging. Every guest seeks to have the access to a uniquely fun experience. Keyflow was motivated by solving the complicated problems of nightlife, aiming to make the fun of nightlife accessible again. Guests and venues have specific requirements and finding the right fit makes the night fun for everyone. Keyflow Team includes night-life professionals who has access to a focus-group of venues and night-life guests. The solutions come with an integrated 2-layered nightlife ecosystem:"
          />{' '}
          <br />
          <TextLi TextLi="Keyflow App for guests to track events, manage VIP cards, invite friends and get admissions." />
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
          <HText1
            Header1="The Solution: Keyflow"
            Text1="Keyflow is currently the most inspiring nightlife event platform in Scandinavia. "
          />{' '}
          <br />
          <TextLi TextLi="Getting access to venues on a global scale, finding the inspiring events conveniently." />
          <TextLi TextLi="Planning-ahead individually or as a group of friends." />
          <TextLi TextLi="Empowering guests when getting admissions and booking tables with flexibility." />
          <TextLi TextLi="Skipping the queue-line, pre-event communication with the venue." />
          <br />
          <br />
          <div className="SectionTitle2">The Process</div>
          <p>
            <strong>Research:</strong> Contextual Analysis, Surveys (guests
            &amp; venues), Periodic Interviews (venue staff), Focus groups (e.g.
            Creatives, VIP guests)
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
            Text1="Thrill of the night might fade out during long queues. Several focus groups for being able to analyse needs of a wide-range of nightlife guests. A group of creatives were invited to the workshops to understanding the needs of guests and the venues. VIP-Guests answered surveys about VIP-Card privileges, sharing privileges with friends and requesting from venues."
          />
          <HText1
            Header1="Ideas: Synthesis for Street-Food Ecosystem"
            Text1="Ideation process of the ecosystem has started with mind-mapping, for being able to name the possible features surrounded by what street-food culture could be. Early iterations of the App-features would focus on 'communication' aspect, connecting different dots of the ecosystem. Empathy maps helped us see the differences between tech-savvy and cooking-focused food-truck chefs. On later iterations, the focus has shifted on improving simultaneous order management &amp; cooking processes. "
          />
          <HText1
            Header1="Design &amp; Prototyping:"
            Text1="Findings of street-food lovers and the food-truck chefs were different from each other. In earlier iterations the design processes were moving on two single-tracks as two developers worked on iOS &amp; Android versions. However, with the implementation of Streetkäk's payment feature, simultaneity has become the new focus. The process started with defining information architecture, sketches and - continued with wireframes, flow diagrams and finally delivery of prototypes (Principle App) assets through Zeplin to developers."
          />
          <br />
          <br />
          <HText1
            Header1="Designing Streetkäk Check-in"
            Text1="Our team had the chance to collaborate with PayPal, Nike and Universal Studios - Sweden to organise focus-group events where working-prototypes built on staging environment were tested. Cash payment, phone-call, disabling menu items during sales, have been developed per the feedback received from the trucks. The system has designed to be scalable and autonomous, which later have been used outside of Stockholm - the birthplace."
          />
          <br />
          <br />
          <HText1
            Header1="Test - Produce - Evaluate"
            Text1="Field tests of Streetkäk have helped addition of agile cooking situations, making it simple to handle crisis situations such as 'sold-out' or cancellation of orders and communicating with the customers. Final run of field-test has taken place in Way Out West festival in Gothenburg, Sweden before release. The released Apps were tested out at a pop-up food-court where discounts, iOS &amp; Android and web products were tested. The development stage has been completed with 2 consults and one internal team-member, where a part of the work has been conducted remotely. Testing, data collection and decision of agile sprint-scopes have been challenges that our team had to solve until the final release."
          />
          <br />
          <br />
          <HText1
            Header1="Conclusions"
            Text1="Keyflow is the main nightlife platform of Scandinavia, with a large number of venues and events posted 
            has grown from an MVP-level software to a compleme 
            Streetkäk has evolved from a simple digital street-food map to become a holistic product that solves problems of street-food habitat in Scandinavia. It has been featured on several international media outlets, creating an organic growth that has lad to 6-digit number of downloads - mostly in Stockholm. I have learned a lot from the whole process about how to brand, build, scale a product, conducting research and solving problems in a set-timeframe. Even though, the product has made its mark to the street-food culture, further improvements are necessary to maintain a sustainable growth:"
          />
          <br />
          <TextLi TextLi="Unique solutions for food-truck chains and single trucks." />
          <TextLi TextLi="Generating meaningful analysis based on collected data from the city and the truck. Notifying both users and trucks about previous positive experiences." />
          <TextLi TextLi="Collaboration with municipal organisations to improve street-food habitat (e.g. better locations, bending hour-limits at certain situations)." />
          <TextLi TextLi="Helping truck owners to improve how they can represent themselves and their food." />
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

export default keyflowPage

export const pageQuery = graphql`
  query {
    kfOne: file(relativePath: { eq: "kf1.jpg" }) {
      ...fluidImage2
    }
    kfTwo: file(relativePath: { eq: "kf2.jpg" }) {
      ...fluidImage2
    }
    kfThree: file(relativePath: { eq: "kf3.jpg" }) {
      ...fluidImage
    }
    kfFour: file(relativePath: { eq: "kf4.jpg" }) {
      ...fluidImage2
    }
    kfFive: file(relativePath: { eq: "kf5.jpg" }) {
      ...fluidImage
    }
    kfSix: file(relativePath: { eq: "kf6.jpg" }) {
      ...fluidImage
    }
    kfSeven: file(relativePath: { eq: "kf7.jpg" }) {
      ...fluidImage
    }
    kfEight: file(relativePath: { eq: "kf8.jpg" }) {
      ...fluidImage
    }
    kfNine: file(relativePath: { eq: "kf9.jpg" }) {
      ...fluidImage
    }
    kfTen: file(relativePath: { eq: "kf10.jpg" }) {
      ...fluidImage
    }
    kfEleven: file(relativePath: { eq: "kf11.jpg" }) {
      ...fluidImage
    }
  }
`
