import React,{useState} from 'react'

function AddBlock({add_block}) {

    const [name, setname] = useState("");
    const [hobbies, sethobbies] = useState("");

    function handleName(e){
        setname(e.target.value);
    }

    function handleHobby(e){
        sethobbies(e.target.value);
    }

    function handleSumbit(){
       var temp={
           id:199,
           name:name,
           hobbies:hobbies
       }
       add_block(temp);
       
    }

  return (
    <div>
        <input onChange={handleName} placeholder="add name"/>
        <input onChange={handleHobby} placeholder="add hobbies" />
        <button onClick={handleSumbit}>ADD</button>
    </div>
  )
}

export default AddBlock