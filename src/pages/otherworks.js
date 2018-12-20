import React from 'react'
import { Link, graphql } from 'gatsby'

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

import dvideo1 from '../images/dimm1.mp4'
import dvideo2 from '../images/dimm2.mp4'
import dvideo3 from '../images/dimm3.mp4'

import dtvideo1 from '../images/poster/dimmer1.png'
import dtvideo2 from '../images/poster/dimmer2.png'
import dtvideo3 from '../images/poster/dimmer3.png'

const otherWorks = props => (
  <div id="rect">
    <Scroller />
    <div id="HeroAbout2" className="HeroAbout">
      <div className="AboutW">
        <div className="AboutProject">
          <div className="ProjectTitle">
            <div className="ProjectName2">Other Works</div>
            <div className="ProjectDetail2">HCD, 3D, Print</div>
            <div className="ProjectDescription">
              My personal visual design design projects - including UI,
              Guidebook, Human Centred Design, 3D, Album Covers, Live
              Illustration and Print Design
            </div>
          </div>
        </div>
      </div>
      <div className="ContentW">
        <div className="Content">
          <HText1
            Header1="Thomas Cook: UI Design"
            Text1="
            UI Design for the landing page of a campaign, including purchase flow elements and iconography - Consult Work, Sydney."
          />
          <div className="images">
            <div className="protoImg">
              <Img
                fluid={props.data.thomasZero.childImageSharp.fluid}
                alt="Thomas Cook: UI Design"
              />
            </div>
            <div className="protoImg">
              <Img
                fluid={props.data.thomasTwo.childImageSharp.fluid}
                alt="Thomas Cook: UI Design"
              />
            </div>
            <div className="protoImg">
              <Img
                fluid={props.data.thomasThree.childImageSharp.fluid}
                alt="Thomas Cook: UI Design"
              />
            </div>
          </div>
          <Img
            fluid={props.data.thomasOne.childImageSharp.fluid}
            alt="Thomas Cook: UI Design"
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
          <br />
          <div className="prototypes">
            <div className="prototype1">
              <video
                poster={dtvideo1}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={dvideo1} />
              </video>
            </div>
            <div className="prototype1">
              <video
                poster={dtvideo2}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={dvideo2} />
              </video>
            </div>
            <div className="prototype3">
              <video
                poster={dtvideo3}
                playsinline
                loop
                muted
                controls={['PlayPause', 'Seek', 'Time', 'Fullscreen']}
              >
                <source src={dvideo3} />
              </video>
            </div>
          </div>
          <Img
            fluid={props.data.dimmerRender.childImageSharp.fluid}
            alt="Dimmer (Prototype) - 3D Model"
          />
          <HText1
            Header1="Design Guidebook: Digital (PDF)"
            Text1="
            A pocket design-guidebook to illustrate subjects I find interesting about 'design' - School Assignment (UNSW), PDF, 12 Pages."
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Design Guidebook (Prototype) - 3D Model"
          />
          <HText1
            Header1="Noluit: Branding"
            Text1="
            Noluit, is a houseboat which is built over 6 steel floating blocks. The houseboat does not just float on water, but also travels around Stockholm’s Archipelago. Branding process included several interviews, research on maritime iconography, considering business plan &amp; recreational event demographics of Noluit, Stockholm.:"
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Noluit: Branding"
          />
          <br />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Noluit: Branding"
          />
          <HText1
            Header1="Pat's Place: Branding"
            Text1="
            Branding &amp; logo design for new Thai Tapas restaurant located at Södermalm, Stockholm (SE). The characters were inspired by tattoos of co-founders (and partners) Pat (Suvannamaccha) and Jacob (Hanuman)."
          />
          <br />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Pats Place - Logo"
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Pats Place - Images"
          />
          <HText1
            Header1="Ikiz - Zoetic Sessions: Album Cover + Live Illustration"
            Text1="Album cover &amp; live-drawing performance for 'Ikiz - Zoetic Sessions' jazz project. The idea of 'Zoetic Sessions' is to create a unique live-experience where arts collide to engage audiences both visually and lyrically. 
            "
          />
          <br />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Ikiz: Zoetic Sessions"
          />
          <br />
          <HText1
            Header1="Karl Olandersson - Simple as That"
            Text1="
            Album Cover design for 'Karl Olandersson - Simple as That':"
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Karl Olandersson - Simple as That"
          />
          <HText1
            Header1="Petter Bergander Trio - The Grand Dance"
            Text1="
            Album Cover design for 'Petter Bergander Trio - The Grand Dance':"
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Petter Bergander Trio - The Grand Dance"
          />
          <HText1
            Header1="#trusttheprocess"
            Text1="
            'The Process' Joel Embiid (NBA Player from 76'ers): 3D-model is inspired by his recovery period &amp; personal journey in NBA."
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Joel Embiid - Trust the Process"
          />
          <HText1
            Header1="Koi Fish: 3D"
            Text1="
            'Low-Poly &amp; rigged koi fish animation study done for an independent movie project."
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
            alt="Joel Embiid - Trust the Process"
          />
          <HText1
            Header1="Hong Kong: Neon Skyline"
            Text1="
            Inspired by the realm of neon-signs, that will no longer exist in a near future in HK. Desgined for colleagues during a business trip."
          />
          <Img
            fluid={props.data.thomasZero.childImageSharp.fluid}
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
    thomasZero: file(relativePath: { eq: "thomas0.jpg" }) {
      ...fluidImage640
    }
    thomasOne: file(relativePath: { eq: "thomas1.jpg" }) {
      ...fluidImage
    }
    thomasTwo: file(relativePath: { eq: "thomas2.jpg" }) {
      ...fluidImage640
    }
    thomasThree: file(relativePath: { eq: "thomas3.jpg" }) {
      ...fluidImage640
    }
    dimmerRender: file(relativePath: { eq: "dimmer1.jpg" }) {
      ...fluidImage
    }
  }
`
