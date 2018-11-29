import React from 'react'
import "./project.css"


const ProjectMini = props => (
    <div className="ProjectItem">
        <div className="ProjectTitle">
            <div className="ProjectName">{props.ProjectName}
            </div>
            <div className="ProjectDetail">{props.ProjectDetail}
            </div>
        </div>
        
    </div>
)

export default ProjectMini