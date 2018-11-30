import React from 'react'

const ResumeItem2 = props => (
    <div className="ResumeItem2">
        <div className="MyRole">{props.MyRole}</div>
        <div className="Workplace">{props.Workplace}</div>
        <div className="Duration">{props.Duration} • {props.City}</div>
        <div className="City"></div>
    </div>   
)

export default ResumeItem2