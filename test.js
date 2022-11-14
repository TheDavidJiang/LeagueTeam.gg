// import React from "react";
// import Button from "react-bootstrap/Button";
const axios = require("axios")

// const url = "https://jsonplaceholder.typicode.com/posts"
const url = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Expired"

axios.get(url).then((response) =>{

    console.log(response.data.status.status_code)
})