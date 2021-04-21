import React, { useState, useEffect } from 'react'
import axios from 'axios';

function UserInput (props) {

  const [name, setName] = useState('')
  const [GitData, setGitData] = useState('')
  //let str = JSON.stringify(GitData)

  
  const handleSubmit = event => {
    event.preventDefault()

    async function getGitData() {
      const response = await axios.get(`https://api.github.com/users/${name}/repos`)

      // create a for loop to iterate over each repo and retrieve data //
      
      const gitData = response.data 
      //console.log(gitData)
      setGitData(gitData)
      //console.log(GitData)
      const result = []
      for (let i = 0; i < gitData.length; i++) {
        const forks = gitData[i].forks
        const stargazer = gitData[i].stargazers_count
        const issues = gitData[i].open_issues_count
        const nameOfRepo = gitData[i].name
        const repoData = { nameOfRepo,forks, stargazer, issues }
        result.push(repoData)
        console.log(result)
        //return result
      }
      
    }
    
    getGitData()
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );

};

export default UserInput;