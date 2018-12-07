import React from 'react'
import Scroller from './scrollP'

const ResumeItem = props => (
  <div className="ResumeItem">
    <div className="MyRole">{props.MyRole}</div>
    <div className="Workplace">{props.Workplace}</div>
    <div className="Duration">
      {props.Duration} • {props.City}
    </div>
    <div className="ThingsDone">
      <li>{props.Item1}</li>
      <li>{props.Item2}</li>
      <li>{props.Item3}</li>
    </div>
  </div>
)

export default ResumeItem
