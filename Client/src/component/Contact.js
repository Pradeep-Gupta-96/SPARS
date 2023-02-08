import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillCalendarPlusFill } from "react-icons/bs";
import Addproject from './Addproject'

const Contact = () => {
  const [first, setfirst] = useState({ Title: "", Discription: "" })
  const [note, setnote] = useState([])

  const onChange = (e) => {
    const { name, value } = e.target
    setfirst({ ...first, [name]: value })
  }

  const addItem = () => {
    if (!first.Title || !first.Discription) {
      alert("Invaild")
    }
    else {
      setnote((prevData) => {
        return [...prevData, first];
      })
      setfirst({ Title: "", Discription: "" })
    }
  }

  const onDelete = (id) => {
    setnote((oldData) =>
      oldData.filter((c, i) => {
        return i !== id;
      })
    )
  }

  return (
    <>
      <div className="addcart">
        <div className="row gy-3">
          <div className="col">
            <div className="card">
              <h3>Project Note</h3>
              <input type="text" name="Title" value={first.Title} onChange={onChange} placeholder='Title' />
              <div className="card-body">
                <textarea name="Discription" value={first.Discription} onChange={onChange} cols="30" rows="5" placeholder='component name and discription'></textarea>
               <BsFillCalendarPlusFill className="icons" onClick={addItem} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-3">
        {note.map((c, i) => {
          return <Addproject
            key={i}
            id={i}
            Title={c.Title}
            Discription={c.Discription}
            delete={onDelete}/>
        })
        }
      </div>
    </>
  )
}

export default Contact