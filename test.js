// import React from "react";
// import Button from "react-bootstrap/Button";
const axios = require("axios")

const url = "https://jsonplaceholder.typicode.com/posts"

axios.get(url).then((response) =>{
    console.log(response.status)
})