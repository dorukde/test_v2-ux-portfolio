import React from 'react'
import { Link } from 'gatsby'
import Project from '../components/project'
import ProjectMini from '../components/projectmini'
import '../components/header.css'

const IndexPage = () => (
  <div id="Works_id" className="Works">
    <Link to="/strafe">
      <Project
        ProjectName="Strafe"
        ProjectDetail="UX-UI"
        ProjectText1=" Strafe is the first esports tracking App for iOS and Android.
            Strafe provides a gamified experience with results, schedules,
            tournament info &amp; statistics for major esports titles."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Link to="/keyflow">
      <Project
        ProjectName="Key&#64258;ow"
        ProjectDetail="UX-UI"
        ProjectText1="Keyflow, headquartered in Stockholm (SE), is an event service solution for both event producers and guests around the globe."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Link to="/keyflowbusiness">
      <Project
        ProjectName="Key&#64258;ow Business"
        ProjectDetail="UX-UI"
        ProjectText1=" Keyflow Business, is the solution for pre-event and real-time guest
            list management of each event of a nightclub. It features guest-list
            management, offline support, real-time request handling, considering
            the goals of venue producers and their teams."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Link to="/streetkak">
      <Project
        ProjectName="Streetkäk App"
        ProjectDetail="Product Design"
        ProjectText1="Inspired by the growing streed food culture in Scandinavia and legendary Citroen H Van - Streetkäk is the first App to locate food trucks and street food vendors real-time, in the Nordic countries such as Sweden, Denmark, Norway and Finland."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>
    <Link to="/otherworks">
      <ProjectMini ProjectName="— Other Works" ProjectDetail="HCD, 3D, Print" />
    </Link>
  </div>
)

export default IndexPage

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
      fluid(quality: 100, maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImage480 = graphql`
  fragment fluidImage480 on File {
    childImageSharp {
      fluid(quality: 100, maxWidth: 480) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
