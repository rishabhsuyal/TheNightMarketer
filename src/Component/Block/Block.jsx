import React from 'react';
import "./Block.css";

function Block({name,hobbies,id,delFunction}) {
  return (
    <div className='container'>
        <div>
        <h3>{name}</h3>
        <p>{hobbies}</p>
        </div>
        <button onClick={()=>delFunction(id)} className="button">DELETE</button>
    </div>
  )
}

export default Block