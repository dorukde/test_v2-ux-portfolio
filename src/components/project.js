import React from 'react'
import './project.css'

const Project = props => (
  <div className="ProjectItem">
    <div className="ProjectTitle">
      <div className="ProjectName">{props.ProjectName}</div>
      <div className="ProjectDetail">{props.ProjectDetail}</div>
    </div>
    <div className="ProjectSubtitle">
      <div className="ProjectText1">{props.ProjectText1}</div>
      {/* Commenting-out Accessibility Text for Test
      <div className="ProjectText2">{props.ProjectText2}</div> */}
    </div>
  </div>
)

export default Project
