import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const riotKey = process.env.REACT_APP_RIOT_KEY



function Search(){

  const emptyName = ""
  const [summonerName, setSummonerName] = useState(emptyName)
  const [riotData, setRiotData] = useState("")

//setting the url to whatever their name is /summoner/${summonerName}
//do the api call on the summoner page

let url = `/summoner/${summonerName}`

    const handleSubmit = async (e)=>{
      e.preventDefault();
      // const response = await fetch(
      //   `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotKey}`
      // )
      // const data = await response.json();
      // console.log("data", data)
      // setRiotData(data)
      //<Link to> the summoner's page with their username

    }

    
    const handleChange = ({ target }) =>{
      setSummonerName(target.value)
    }
    console.log("summName is: ", summonerName)

    return (
      <>
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter summoner name here" onChange={handleChange}/>
      <Link to={url}><Button type="submit" variant="primary">Submit</Button></Link>
      {/* <Button type="submit" variant="primary">Submit</Button> */}
    </form>
  </div>
  <div>
<pre>{JSON.stringify(riotData)}</pre>
  </div>
  </>
  )
}

export default Search