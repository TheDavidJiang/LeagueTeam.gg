import React, {useState} from "react";
import Button from "react-bootstrap/Button";

function Search(){

  const [summonerName, setSummonerName] = useState("")

    const handleSubmit = async (e)=>{
      e.preventDefault();
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