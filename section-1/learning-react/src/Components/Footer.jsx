import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons"

export default function Footer () {
    return (
        <footer className="footer">
            <ul className="footer--social">
                <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                <li><FontAwesomeIcon icon={faFacebookSquare} /></li>
                <li><FontAwesomeIcon icon={faInstagramSquare} /></li>
                <li><FontAwesomeIcon icon={faGithubSquare} /></li>
            </ul>
        </footer>
    )
}