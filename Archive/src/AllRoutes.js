import React from "react"
import { Route, Routes} from "react-router-dom"
import ErrorPage from "./ErrorPage"
import SummonersPage from "./SummonersPage"
import Layout from "./Layout"

function AllRoutes(){

    return (
        <>
            <Routes>
            {/* <Route path="/summoner" element={<SummonersPage />}>
                <SummonersPage />
            </Route> */}


                <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
                    
                </Route>

            </Routes>
        </>
    )
}

export default AllRoutes