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

import svideo1 from '../images/strafe0.mp4'
import svideo2 from '../images/strafe1.mp4'
import svideo3 from '../images/strafe2.mp4'

const otherWorks = props => (
  <div id="rect">
    <Scroller />
    <div id="HeroAbout2" className="HeroAbout">
      <div className="AboutW">
        <div className="AboutProject">
          <div className="ProjectTitle">
            <div className="ProjectName2">Other Works</div>
            <div className="ProjectDetail2">HCD, 3D, Print</div>
          </div>
          <div className="ProjectDescription">
            My personal visual design design projects - including UI, Guidebook,
            Human Centred Design, 3D, Album Covers, Live Illustration and Print
            Design
          </div>{' '}
        </div>
      </div>

      <div className="ContentW">
        <div className="Content">
          <HText1
            Header1="Thomas Cook: UI Design"
            Text1="
            UI Design for the landing page of a campaign, including purchase flow elements - Consult Work, Sydney."
          />{' '}
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Design Guidebook (Prototype) - 3D Model"
          />
          <br />
          <HText1
            Header1="Dimmer: Human Centred Design"
            Text1="
            Dimmer is a school-project (at UNSW) where I had the chance to focus on human-centred design. Initial focus of the project was to create a video-chat experience for seniors. Final iteration of the product aims to remove challenges of incompatible experiences with a focus on 'hearing difficulties'. Features were designed after having run two user-research sessions and user-testing using simple prototypes. 3D models were rendered using Maya &amp; Arnold. Dimmer features:"
          />{' '}
          <TextLi TextLi="Hearing difficulty indicators: Speed of communication, clarity, amplitude." />
          <TextLi TextLi="Vibration &amp; light indicators as visual feedback, compatibility with hearing devices." />
          <TextLi TextLi="Additional Speaker &amp; keyboard with physical keys for improved usability." />
          <div className="prototypes">
            <div className="prototype1">
              <video
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={svideo1} />
              </video>
            </div>
            <div className="prototype1">
              <video
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={svideo2} />
              </video>
            </div>
            <div className="prototype1">
              <video
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={svideo3} />
              </video>
            </div>
          </div>
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Dimmer (Prototype) - 3D Model"
          />
          <HText1
            Header1="Design Guidebook: Digital (PDF)"
            Text1="
            A pocket design-guidebook to illustrate subjects I find interesting about 'design' - School Assignment (UNSW), PDF, 12 Pages."
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Design Guidebook (Prototype) - 3D Model"
          />
          <HText1
            Header1="Noluit: Branding"
            Text1="
            Noluit, is a houseboat which is built over 6 steel floating blocks. The houseboat does not just float on water, but also travels around Stockholm’s Archipelago. Branding process included several interviews, research on maritime iconography, considering business plan &amp; recreational event demographics of Noluit, Stockholm.:"
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Noluit: Branding"
          />
          <br />
          <Img
            fluid={props.data.sfIcons.childImageSharp.fluid}
            alt="Noluit: Branding"
          />
          <HText1
            Header1="Pat's Place: Branding"
            Text1="
            Branding &amp; logo design for new Thai Tapas restaurant located at Södermalm, Stockholm (SE). The characters were inspired by tattoos of co-founders (and partners) Pat (Suvannamaccha) and Jacob (Hanuman)."
          />
          <br />
          <Img
            fluid={props.data.sfOnboarding.childImageSharp.fluid}
            alt="Pats Place - Logo"
          />
          <Img
            fluid={props.data.sfFlow.childImageSharp.fluid}
            alt="Pats Place - Images"
          />
          <HText1
            Header1="Ikiz - Zoetic Sessions: Album Cover + Live Illustration"
            Text1="Album cover &amp; live-drawing performance for 'Ikiz - Zoetic Sessions' jazz project. The idea of 'Zoetic Sessions' is to create a unique live-experience where arts collide to engage audiences both visually and lyrically. 
            "
          />
          <br />
          <Img
            fluid={props.data.sfLeaderboard.childImageSharp.fluid}
            alt="Ikiz: Zoetic Sessions"
          />
          <br />
          <HText1
            Header1="Karl Olandersson - Simple as That"
            Text1="
            Album Cover design for 'Karl Olandersson - Simple as That':"
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Karl Olandersson - Simple as That"
          />
          <HText1
            Header1="Petter Bergander Trio - The Grand Dance"
            Text1="
            Album Cover design for 'Petter Bergander Trio - The Grand Dance':"
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Petter Bergander Trio - The Grand Dance"
          />
          <HText1
            Header1="#trusttheprocess"
            Text1="
            'The Process' Joel Embiid (NBA Player from 76'ers): 3D-model is inspired by his recovery period &amp; personal journey in NBA."
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Joel Embiid - Trust the Process"
          />
          <HText1
            Header1="Koi Fish: 3D"
            Text1="
            'Low-Poly &amp; rigged koi fish animation study done for an independent movie project."
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="Joel Embiid - Trust the Process"
          />
          <HText1
            Header1="Hong Kong: Neon Skyline"
            Text1="
            Inspired by the realm of neon-signs, that will no longer exist in a near future in HK. Desgined for colleagues during a business trip."
          />
          <Img
            fluid={props.data.sfApp.childImageSharp.fluid}
            alt="HONG KONG: Neon Skyline"
          />
          <br />
          <div className="BWrapper">
            <Link to="/streetkak">
              <BTextA BHeader1="⟵ Previous" BText1="Streetkäk App" />
            </Link>
            <Link to="/strafe">
              <BTextB BHeader2="Next ⟶" BText2="Strafe" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default otherWorks

export const pageQuery = graphql`
  query {
    sfOne: file(relativePath: { eq: "kf1.jpg" }) {
      ...fluidImage2
    }
    sfTwo: file(relativePath: { eq: "kfTwo.jpg" }) {
      ...fluidImage2
    }
    sfIcons: file(relativePath: { eq: "strafe_icons.jpg" }) {
      ...fluidImage
    }
    sfOnboarding: file(relativePath: { eq: "st_onboarding.jpg" }) {
      ...fluidImage
    }
    sfLeaderboard: file(relativePath: { eq: "stLeaderboard.jpg" }) {
      ...fluidImage
    }
    sfFlow: file(relativePath: { eq: "stFlow.jpg" }) {
      ...fluidImage
    }
    sfWflow: file(relativePath: { eq: "stWflow.jpg" }) {
      ...fluidImage
    }
    sfApp: file(relativePath: { eq: "sf_app.jpg" }) {
      ...fluidImage
    }
  }
`
