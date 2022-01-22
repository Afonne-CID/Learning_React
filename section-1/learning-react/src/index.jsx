import React from "react"
import ReactDOM from "react-dom"
import "./assets/styles/reset.css"
import "./assets/styles/main.css"
import "./assets/styles/Info.css"
import "./assets/styles/Footer.css"
import Info from "./Components/Info"
import About from "./Components/About"
import Interests from "./Components/Interests"
import Footer from "./Components/Footer"

function App () {
    return (
        <main className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </main>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root")
)