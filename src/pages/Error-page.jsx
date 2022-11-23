import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.error("errorzors: ", error)

    return (
        <div id="error-page">
            <h1>OOPSIE WOOPSIE!! uwu</h1>
            <p>There's an error uwu!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}