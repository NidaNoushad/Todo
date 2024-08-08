import React from 'react'
import { useState } from 'react';
import { MdDone } from "react-icons/md";


const Addtask = ({handleAddTask,color,name,setName}) => {
 
  return (
    <div className="align-middle" >
    <input type="text" value={name} 
    onChange={(e)=>setName(e.target.value)}
    style={color} />
    <button title="Done"
              style={{ outline: "0" , height:"40px",margin:"0.5rem"}}
              onClick={()=>handleAddTask(name)}>
              <MdDone style={{ color: "darkgreen", margin: "0 0rem" }} />
            </button>

  </div>
  )
}

export default Addtask
