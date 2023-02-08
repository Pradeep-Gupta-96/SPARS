import React from 'react'
import { BsFillCalendar2XFill } from "react-icons/bs";

const Addproject = (props) => {
  const forDe=()=>{
  props.delete(props.id)
  }
  return (
        <div className="col">
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">{props.Title}</h5>
              <p className="card-text">{props.Discription}</p>
            <BsFillCalendar2XFill className="icons"  onClick={forDe} />
            </div>
          </div>
        </div>   
  )
}

export default Addproject