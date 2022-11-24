import {Link} from "react-router-dom"
import Header from "./components/header/Header"

export default function Layout(){

    return(
        <>
        <div>Hello world</div>
        <Link to={`summoner`}>Go to summoner</Link>
        </>
    )
}