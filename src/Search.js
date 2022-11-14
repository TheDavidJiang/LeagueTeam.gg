import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import SummonersPage from "./SummonersPage";





function Search(){

  const [summonerName, setSummonerName] = useState("")
  const [errors, setErrors] = useState([])

    const handleSubmit = async (e)=>{
      e.preventDefault();
      const ac = new AbortController()
      try{
        console.log("hellosz");

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
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter summoner name here" onChange={handleChange}/>
      <Button type="submit" variant="primary">Submit</Button>
    </form>
  </div>)
}

export default Search