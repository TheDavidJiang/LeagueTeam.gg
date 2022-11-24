import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
<<<<<<<< HEAD:Archive/src/Search.js
import SummonersPage from "./SummonersPage";

const riotKey = process.env.REACT_APP_RIOT_KEY





========
>>>>>>>> 62dcc9729849c5084d2563be36d16423c85ffff5:src/components/Search.js

function Search(){

  const [summonerName, setSummonerName] = useState("")

    const handleSubmit = async (e)=>{
      e.preventDefault();
<<<<<<<< HEAD:Archive/src/Search.js
      const ac = new AbortController()
      try{
        console.log(riotKey)

      }catch(e){
        setErrors([...errors, e])
        console.log(e)
      }
      
========
>>>>>>>> 62dcc9729849c5084d2563be36d16423c85ffff5:src/components/Search.js
    }

    
    const handleChange = ({ target }) =>{
      setSummonerName(target.value)
    }
    console.log("summName is: ", summonerName)

    return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter summoner name here" onChange={handleChange}/>
      <Button type="submit" variant="primary">Submit</Button>
    </form>
  </div>)
}

export default Search