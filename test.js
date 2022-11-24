// import React from "react";
// import Button from "react-bootstrap/Button";
require('dotenv').config()
const axios = require("axios")
const riotKey = process.env.REACT_APP_RIOT_KEY
console.log(riotKey)


// const url = "https://jsonplaceholder.typicode.com/posts"
// const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Expired"
const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Expired?api_key=${riotKey}`
console.log(url)


// axios.get(url).then((response) =>{
//     console.log(response.data.name)
// })