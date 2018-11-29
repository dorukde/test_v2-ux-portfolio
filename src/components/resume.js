import React from 'react'

const ResumeItem = props => (
    <div className="ResumeItem">
        <div className="Role">{props.Role}</div>
        <div className="Workplace">{props.Workplace}</div>
        <div className="Duration">{props.Duration} • {props.City}</div>
        <div className="City"></div>
        <ul>
            <li>{props.Item1}</li>
            <li>{props.Item2}</li>
            <li>{props.Item3}</li>            
        </ul>
    </div>   
)

export default ResumeItem