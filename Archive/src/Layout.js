import React from "react"
import { useNavigate } from "react-router";
import Header from "./Header";
import AllRoutes from "./AllRoutes"

function Layout(){
    const history = useNavigate()
    return (
    <div>
      <div className="row-md-2 no-padding" style={{ backgroundColor: "#1f424b" }}>
        {<Header />}
      </div>
      <div className="containerMax">
        <div className="row-12">
          <div className="center-text header" onClick={() => history.push("/")}>
            <h1 className="header-logo">Dashboard</h1>
          </div>
          {/* <div className="row justify-content-center align-items-start p-4"> */}
          <div className = "row">
            <AllRoutes />
          </div>
        </div>
      </div>

    </div>
    )
}


export default Layout