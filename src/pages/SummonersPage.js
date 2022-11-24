import React from "react";
import Summoner from "./Summoner";
const axios = require("axios")

// const url = "https://jsonplaceholder.typicode.com/posts"
// const url = "/lol/summoner/v4/summoners/by-name/{summonerName}"

// axios.get(url).then((response) =>{
//     console.log(response)
// })

function SummonersPage(){

    return (
        <Summoner />
    )
}

export default SummonersPage