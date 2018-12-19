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

import Scroller from '../components/scrollP'

const skakPage = props => (
  <div id="rect">
    <Scroller />
    <div id="HeroAbout2" className="HeroAbout">
      <div className="AboutW">
        <div className="AboutProject">
          <div className="ProjectTitle">
            <div className="ProjectName2">Streetkäk App</div>
            <div className="ProjectDetail2">Product Design</div>
          </div>
          <div className="ProjectDescription">
            Inspired by the growing street food culture in Scandinavia, and
            legendary Citroen H Van. Streetkäk is the first App to locate food
            trucks and other street food vendors in real time, in the Nordic
            countries such as Sweden, Denmark, Norway and Finland.
          </div>
          <h1>
            <a
              href="https://itunes.apple.com/se/app/streetkak/id789455301"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaApple />
            </a>
            <FaGooglePlay />
            <div className="infobox">
              <div className="textbold">Platform:</div> iOS/Android &amp; Web{' '}
              <br />
              <div className="textbold">Duration:</div> 2015/5 – 2018/12 <br />
              <div className="textbold">Role:</div> Co-Founder, Product Designer
              <br />
              <div className="textbold">Method:</div> Lean UX <br />
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
            Header1="Street-food in Scandinavia"
            Text1="Summer of 2014 marked the launch of street-food trucks in Stockholm and made a big impact during the short summer (e.g. a new TV-series about street-food). Streetkäk (street + snack) started as a passion project, including an ex hamburger-kiosk chef. Initial idea of Streetkäk has been locating and finding food-trucks in the city before they were out in the wild. The time was scarce for street-food lovers, as well as the limited supply of good-taste to be chased."
          />
          <Text2 Text2="Streetkäk's visual language has been crafty, humanistic, with a team having a complete 'DIY' approach. After having collaborated with the food-truck chefs and observing their interaction with the community, the visual language has shaped as  crafty, custom and 'humanist', as tech-savvy as greasy hands and a hungry mind." />
          <br />
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.skOne.childImageSharp.fluid}
              alt="Logo and App Icon"
            />
            <Img
              fluid={props.data.skTwo.childImageSharp.fluid}
              alt="Typography and Colour"
            />
          </div>
          <div className="gatsby-image-wrapper2">
            <Img
              fluid={props.data.skThree.childImageSharp.fluid}
              alt="Iconography"
            />
            <Img
              fluid={props.data.skFour.childImageSharp.fluid}
              alt="State Indicators"
            />
          </div>
          <HText1
            Header1="The Problem"
            Text1="Our contextual observation has shown the importance of 'communication' in street-food culture. Street-food can be thought as a storytelling process, involving the chef, the story of the food, and participation of street-food lover. In Nordic cities, there are regulations about time-interval, location and schedule of sales for food trucks. Communication within the street-food community depended on 'happy coincidences' and social media, without a specific platform. Often times, food-truck chefs run a 'one man show', making it harder to manage social-media updates while cooking at the same time. "
          />{' '}
          <br />
          <TextLi TextLi="Check-in locations and serving schedule change rapidly." />
          <TextLi TextLi="Menu changes on a daily-basis, social media updates require visual work." />
          <TextLi TextLi="Notifying nearby customers, managing promotions over stamp-cards are challenges." />{' '}
          <TextLi TextLi="Lack of online food-order systems solving street-food problems." />
          <HText1
            Header1="The Solution: Streetkäk &amp; Check-in"
            Text1="Streetkäk provides a complete solution for the food-truck community, with an agile platform and a Check-in App for food-truck owners to start with. Street-food community loves some genuine 'small-talk' to learn about the other side of the story. Streetkäk's idea has been creating a platform, that removes the distance created by limitations.  "
          />{' '}
          <br />
          <TextLi TextLi="Tracking location, schedule and availability of food-trucks." />
          <TextLi TextLi="Possibility to call the truck, pay by credit card, or by cash." />
          <TextLi TextLi="Side dish (time-saver): Generated social-media assets." />
          <br />
          <div class="embed-container">
            <iframe
              src="https://player.vimeo.com/video/235285409?color=ffffff&title=0&byline=0&portrait=0"
              frameborder="0"
              webkitAllowFullScreen
              mozallowfullscreen
              allowFullScreen
              scrolling="yes"
            />
          </div>
          <br />
          <div className="SectionTitle2">The Process</div>
          <p>
            <strong>Research:</strong> Contextual Analysis, Surveys (trucks),
            Interviews (users), Focus groups
            <br />
            <strong>Ideas:</strong> Mind Map, Empathy Map, User Journey Map
            <br />
            <strong>Design:</strong> Storyboarding, Heuristic Evaluation,
            Sketching, Wireframing &amp; Zeplin
            <br />
            <strong>Prototype:</strong> High Fidelity Prototype, Interactive
            Button (flic) &amp; Notifications (trucks)
            <br />
            <strong>Test-Produce-Evaluate:</strong> User Testing (individual
            &amp; group), Experience Sampling, Field (Feature) Testing,
            Functional Testing
            <br />
          </p>
          <HText1
            Header1="Research: Persona of a Food-Truck"
            Text1="Streetkäk Team has been in close contact from the early era of food trucks in Stockholm (first 10 trucks) until the number has grown up to 3-digit numbers of trucks in Scandinavia. The research process included participatory workshops with truck owners, surveys, recollection of test-event data. Test-events also helped food-truck lovers to answer our questions, which helped prioritisation of problems to solve and building features. The research phase has created emphasis on communication and personality of food-trucks."
          />
          <Img
            fluid={props.data.skFive.childImageSharp.fluid}
            alt="Personalising Trucks"
          />
          <HText1
            Header1="Ideas: Synthesis for Street-Food Ecosystem"
            Text1="Ideation process of the ecosystem has started with mind-mapping, for being able to name the possible features surrounded by what street-food culture could be. Early iterations of the App-features would focus on 'communication' aspect, connecting different dots of the ecosystem. Empathy maps helped us see the differences between tech-savvy and cooking-focused food-truck chefs. On later iterations, the focus has shifted on improving simultaneous order management &amp; cooking processes. "
          />
          <Img
            fluid={props.data.skSix.childImageSharp.fluid}
            alt="Ecosystem for Street-Food"
          />
          <HText1
            Header1="Design &amp; Prototyping:"
            Text1="Findings of street-food lovers and the food-truck chefs were different from each other. In earlier iterations the design processes were moving on two single-tracks as two developers worked on iOS &amp; Android versions. However, with the implementation of Streetkäk's payment feature, simultaneity has become the new focus. The process started with defining information architecture, sketches and - continued with wireframes, flow diagrams and finally delivery of prototypes (Principle App) assets through Zeplin to developers."
          />
          <br />
          <Img
            fluid={props.data.skSeven.childImageSharp.fluid}
            alt="Ecosystem for Street-Food"
          />
          <br />
          <Img
            fluid={props.data.skTen.childImageSharp.fluid}
            alt="Ecosystem for Street-Food"
          />
          <HText1
            Header1="Designing Streetkäk Check-in"
            Text1="Our team had the chance to collaborate with PayPal, Nike and Universal Studios - Sweden to organise focus-group events where working-prototypes built on staging environment were tested. Cash payment, phone-call, disabling menu items during sales, have been developed per the feedback received from the trucks. The system has designed to be scalable and autonomous, which later have been used outside of Stockholm - the birthplace."
          />
          <br />
          <Img
            fluid={props.data.skEight.childImageSharp.fluid}
            alt="Ecosystem for Street-Food"
          />
          <br />
          <Img
            fluid={props.data.skEleven.childImageSharp.fluid}
            alt="Ecosystem for Street-Food"
          />
          <HText1
            Header1="Test - Produce - Evaluate"
            Text1="Field tests of Streetkäk have helped addition of agile cooking situations, making it simple to handle crisis situations such as 'sold-out' or cancellation of orders and communicating with the customers. Final run of field-test has taken place in Way Out West festival in Gothenburg, Sweden before release. The released Apps were tested out at a pop-up food-court where discounts, iOS &amp; Android and web products were tested. The development stage has been completed with 2 consults and one internal team-member, where a part of the work has been conducted remotely. Testing, data collection and decision of agile sprint-scopes have been challenges that our team had to solve until the final release."
          />
          <br />
          <Img
            fluid={props.data.skNine.childImageSharp.fluid}
            alt="Ecosystem for Street-Food"
          />
          <br />
          <HText1
            Header1="Conclusions"
            Text1="Streetkäk has evolved from a simple digital street-food map to a holistic product that solves problems of street-food habitat in Scandinavia. It has been featured on several international media outlets, creating an organic growth that has led to 6-digit number of downloads - mostly in Stockholm. I have learned a lot from the whole process about how to brand, build, scale a product, conducting research and solving problems in a set-timeframe. Even though, the product has made its mark to the street-food culture, further improvements are necessary to maintain a sustainable growth:"
          />
          <br />
          <TextLi TextLi="Unique solutions for food-truck chains and single trucks." />
          <TextLi TextLi="Generating meaningful analysis based on collected data from the city and the truck. Notifying both users and trucks about previous positive experiences." />
          <TextLi TextLi="Collaboration with municipal organisations to improve street-food habitat (e.g. better locations, bending hour-limits at certain situations)." />
          <TextLi TextLi="Helping truck owners to improve how they can represent themselves and their food." />
          <div className="BWrapper">
            <Link to="/keyflowbusiness">
              <BTextA BHeader1="⟵ Previous" BText1="Keyflow Business" />
            </Link>
            <Link to="/otherworks">
              <BTextB BHeader2="Next ⟶" BText2="Other Works" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default skakPage

export const pageQuery = graphql`
  query {
    skOne: file(relativePath: { eq: "sk1.jpg" }) {
      ...fluidImage2
    }
    skTwo: file(relativePath: { eq: "sk2.jpg" }) {
      ...fluidImage2
    }
    skThree: file(relativePath: { eq: "sk3.jpg" }) {
      ...fluidImage2
    }
    skFour: file(relativePath: { eq: "sk4.jpg" }) {
      ...fluidImage2
    }
    skFive: file(relativePath: { eq: "sk5.jpg" }) {
      ...fluidImage
    }
    skSix: file(relativePath: { eq: "sk6.jpg" }) {
      ...fluidImage
    }
    skSeven: file(relativePath: { eq: "sk7a.jpg" }) {
      ...fluidImage
    }
    skEight: file(relativePath: { eq: "sk8.jpg" }) {
      ...fluidImage
    }
    skNine: file(relativePath: { eq: "sk9.jpg" }) {
      ...fluidImage
    }
    skTen: file(relativePath: { eq: "sk10.jpg" }) {
      ...fluidImage
    }
    skEleven: file(relativePath: { eq: "sk11.jpg" }) {
      ...fluidImage
    }
  }
`
