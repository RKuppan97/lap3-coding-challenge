import React, { useState, useEffect } from 'react'
import axios from 'axios';
function UserInput (props) {

  const [Name, setName] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    //setName(e.target.value)
    console.log({Name})
    
  }
  function handleInput(e, inputToSet){
    inputToSet(e.target.value)
}

  useEffect(() => {
    async function getGitData() {
      try {
        let {data} = await axios.get(`https://api.github.com/users/${Name}/repos`)
        console.log('This is working')
        console.log(data)
        
      } catch (err) {
        console.warn(err);
      }

    }
    getGitData()

  },[])
  //onChange={e => setName(e.target.value)}

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input onChange={(e) => handleInput(e, setName)} type="text" placeholder="Enter Github Username" value = {Name}/>
        <input type="submit" value="Submit" />
    </form>
    
    </>
  );

};

export default UserInput;