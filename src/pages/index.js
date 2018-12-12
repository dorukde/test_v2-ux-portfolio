import React from 'react'
import { Link } from 'gatsby'
import Project from '../components/project'
import ProjectMini from '../components/projectmini'
import '../components/header.css'

const IndexPage = () => (
  <div id="Works_id" className="Works">
    <Project
      ProjectName="Strafe"
      ProjectDetail="UX-UI"
      ProjectText1="Strafe is the first e-sports tracking App for iOS and Android. Strafe provides results, schedules, tournament info &amp; statistics for major e-sports titles."
      ProjectText2="VIEW PROJECT >"
    />

    <Link to="/keyflow">
      <Project
        ProjectName="Key&#64258;ow"
        ProjectDetail="UX-UI"
        ProjectText1="Keyflow, headquartered in Stockholm (SE), is an event service solution for both event producers and guests around the globe."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <Project
      ProjectName="Key&#64258;ow Business"
      ProjectDetail="UX-UI"
      ProjectText1="Keyflow Business, is the solution for pre-event and real-time guest list management of each event of a nightclub. It features offline support, guest-list management, request handling, considering the goals of venue-owners, and the team."
      ProjectText2="VIEW PROJECT >"
    />

    <Link to="/streetkak">
      <Project
        ProjectName="Streetkäk App"
        ProjectDetail="Product Design"
        ProjectText1="Inspired by the growing streed food culture in Scandinavia and legendary Citroen H Van - Streetkäk is the first App to locate food trucks and street food vendors real-time, in the Nordic countries such as Sweden, Denmark, Norway and Finland."
        ProjectText2="VIEW PROJECT >"
      />
    </Link>

    <ProjectMini ProjectName="— Other Works" ProjectDetail="HCD, 3D, Print" />
  </div>
)

export default IndexPage
