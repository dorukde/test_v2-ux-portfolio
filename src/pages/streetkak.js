import React from 'react'
import { Link, graphql } from 'gatsby'
import { FaGooglePlay, FaApple } from 'react-icons/fa'
import '../components/projectpage.css'
import Img from 'gatsby-image'

/*TEXT COMPONENTS */
import HText1 from '../components/text1'
import Text2 from '../components/text2'
import SHeader from '../components/sheader'

const skakPage = props => (
  <div id="HeroAbout2" className="HeroAbout">
    <div className="AboutW">
      <div className="AboutProject">
        <div className="ProjectTitle">
          <div className="ProjectName2">Streetkäk App</div>
          <div className="ProjectDetail2">Product Design</div>
        </div>
        <div className="ProjectDescription">
          Inspired by the growing streed food culture in Scandinavia, and
          legendary Citroen H Van. Streetkäk is the first App to locate food
          trucks and other street food vendors in real time, in the Nordic
          countries such as Sweden, Denmark, Norway and Finland.
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
          <div className="textbold">Duration:</div> 2015/5 – 2018/5 <br />
          <div className="textbold">Role:</div> Co-Founder, Product Designer
          <br />
          <div className="textbold">Method:</div> Lean UX
          <br />
        </div>
        <div className="SectionTitle">Introduction</div>
        <HText1
          Header1="Street-food in Scandinavia"
          Text1="Summer of 2014, marked the launch of street-food trucks in Stockholm, and made a big impact during the short summer (e.g. a new TV-series about street-food). Streetkäk (swe: street + shack) started as a passion project, including an ex hamburger-kiosk chef. Initial idea of Streetkäk has been locating and finding food-trucks in the city before they were out in the wild. The time was scarce for street-food lovers, as well as the limited supply of good-taste to be chased."
        />
        <Text2 Text2="Streetkäk's visual language has been crafty, humanistic, with a team having a complete 'DIY' approach. After having collaborated with the food-truck chefs and observing their interaction with the community, the visal language has shaped as  crafty, custom and 'humanist', as tech-savvy as greasy hands and a hungry mind." />
        <br />
        <Img fluid={props.data.skOne.childImageSharp.fluid} />
        <Img fluid={props.data.skTwo.childImageSharp.fluid} />
        <Img fluid={props.data.skThree.childImageSharp.fluid} />
        <Img fluid={props.data.skFour.childImageSharp.fluid} />
        <HText1
          Header1="The Problem"
          Text1="'Communication' is at the heart of street-food culture. Street-food can be thought as a storytelling process, involving the chef, the story of the food, and participation of street-food lover. In Nordic cities, there are regulations about time-interval, location and schedule of sales for food trucks. Communication within the street-food community depended on 'happy coincidences' and social media, without a specific platform. Often times, food-truck chefs run a 'one man show', making it harder to manage social-media updates while cooking at the same time. "
        />
        <HText1
          Header1="Solution: Streetkäk &amp; Check-in"
          Text1="Streetkäk provides a complete solution for the food-truck community, with an agile platform and a Check-in App for food-truck owners to start with. 
          Street-food community loves 'small-talk' and Streetkäk's idea has been creating a platform, that removes the distance created by limitations. Food truck owners need to be able to "
        />
        <div className="SectionTitle">The Process</div>
        <HText1
          Header1="Persona of a Food-Truck"
          Text1="'Communication' is the core concept shaping street-food culture. It is a complete-storytelling process that is personal, involving the chef, the story of the food, and participation of street-food lover. However, the trucks needed a platform for being able to say 'Hi' and introduce their menu/prices for making the most of their limited time on the street. Streetkäk provided an admin-panel where food-truck owners could add/edit their intro/menu, add food specifications (happy cows &amp; no more allergies)."
        />
        <Img fluid={props.data.skFive.childImageSharp.fluid} />
        <div className="SectionTitle">Streetkäk Check-in</div>
        <HText1
          Header1="The Process"
          Text1="Summer of 2014 marked the launch of street-food trucks in Stockholm, and made a big impact during the short summer (e.g. a new TV-series about street-food). Streetkäk started as a passion project, including an ex hamburger-kiosk chef. Initial idea of Streetkäk has been locating and finding food-trucks in the city before they were out in the wild. The time was scarce as well as limited supply of good-taste to be chased for street-food lovers."
        />
        <br />
      </div>
    </div>
  </div>
)

export default skakPage

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 960) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
export const fluidImage2 = graphql`
  fragment fluidImage2 on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 480) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

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
  }
`
