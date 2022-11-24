import { Component } from "react";
import Header from "../components/Header";
import Search from "../components/Search";

class Home extends Component {
    render() {
        return(
            <div className="Home">
                <Header />
                <Search />
            </div>
        )
    }
}

  export default Home;