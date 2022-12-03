import { Form } from "react-router-dom"
import { useState } from "react"
import axios from "axios"



export default function Summoner(){

    const initialInfoState = {
        summonerName: "",
        level: "",
        rank: ""
    }

    const [summonerName, setSummonerName] = useState("")
    const [summonerLevel, setSummonerLevel] = useState(0)

    const riotKey = process.env.REACT_APP_RIOT_KEY
    // const summonerName = //from the params
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/Expired?api_key=${riotKey}`

    axios.get(url).then((response)=>{
        const displaySummonerLevel = response.data.summonerLevel
        // console.log(displaySummonerName)
        // console.log(displaySummonerLevel)
        setSummonerName(response.data.name)
        setSummonerLevel(response.data.summonerLevel)

    })



    //use useState to store the response data
    const contact = {
        first: "Your",
        last: "Name",
        avatar: "https://placekitten.com/g/200/200",
        twitter: "your_handle",
    }

    return (
        <>
            <h1>Summoner Page</h1>
                <div id="contact">
                    <div>
                        <img 
                        key={contact.avatar}
                        alt={"SummonerIcon"}
                        src={contact.avatar || null}
                        />
                    </div>
                </div>

                <div>
                    <h1>
                        {/* {contact.first || contact.last ? (
                            <>
                            {contact.first} {contact.last}</>
                        ) : (
                            <i>No name</i>
                        )}{" "} */}
                        {summonerName} Level {summonerLevel}

                    </h1>
                </div>
        </>

    )
}