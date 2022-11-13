import React from "react";
import Button from "react-bootstrap/Button";


function Search(){

    const handleSubmit = async ()=>{
        console.log("hellos")
    }

    return (
    <div>
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Enter summoner name here" />
      <Button variant="primary">Submit</Button>
    </form>
  </div>)
}

export default Search