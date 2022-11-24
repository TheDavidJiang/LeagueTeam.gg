import { Form } from "react-router-dom"

export default function Summoner(){
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
                        src={contact.avatar || null}
                        />
                    </div>
                </div>

                <div>
                    <h1>
                        {contact.first || contact.last ? (
                            <>
                            {contact.first} {contact.last}</>
                        ) : (
                            <i>No name</i>
                        )}{" "}

                    </h1>
                </div>
        </>

    )
}