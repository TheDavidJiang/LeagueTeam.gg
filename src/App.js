import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  return (
  <React.Fragment>
    <Header />
  </React.Fragment>
//   <Router>
//   <div>
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>

//       </ul>
//     </nav>

//     {/* A <Switch> looks through its children <Route>s and
//         renders the first one that matches the current URL. */}
//     <Routes>

//       <Route path="/">
//         {/* <Header /> */}
//       </Route>
//     </Routes>
//   </div>
// </Router>
  )
}

export default App;