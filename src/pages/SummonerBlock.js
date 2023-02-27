import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

export default function SummonerBlock(){
    const riotKey = process.env.REACT_APP_RIOT_KEY
    const params = useParams()
    const [summonerInfo, setSummonerInfo] = useState({})
    const summonerName = params.summonerName

async function dataCall(){
    const response = await fetch(
        `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotKey}`
    )
    const data = await response.json();
    console.log("data", data)
    setSummonerInfo(data)
}


useEffect(()=>{
    dataCall()
}, [])

const info = {
    summName: summonerInfo.name,
    level: summonerInfo.summonerLevel,
    icon: summonerInfo.profileIconId

}

const iconURL = `http://ddragon.leagueoflegends.com/cdn/13.4.1/img/profileicon/${info.icon}.png`
console.log("iconurl", iconURL)
  
      
    return(
        <>
        <div>
        "helloz this be summonerBlock"
        </div>
        <div>
            This is the page of {params.summonerName}
            </div> 
        <img 
        key={info.icon}
        alt={"SummonerIcon"}
        src={iconURL || null}
        />


        <div>
            Hello {info.summName}, level {info.level}, icon {info.icon}
        </div>
        </>
        
    )
}