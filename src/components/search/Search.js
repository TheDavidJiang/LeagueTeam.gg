import React, {useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Summoner from "../../pages/Summoner";


const riotKey = process.env.REACT_APP_RIOT_KEY


function Search(){

  const [summonerName, setSummonerName] = useState("")
  const [errors, setErrors] = useState([])

    const handleSubmit = async (e)=>{
      e.preventDefault();
      const ac = new AbortController()
      try{

        <Link to={`summoner`}></Link>

      }catch(e){
        setErrors([...errors, e])
        console.log(e)
      }
      
    }

    
    const handleChange = ({ target }) =>{
      setSummonerName(target.value)
    }
    console.log("summName is: ", summonerName)



    return (
      <>
    <div>

<div>
  hello
</div>
  </div>

  </>
  )
}

export default Search