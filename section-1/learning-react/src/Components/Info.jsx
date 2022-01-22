import React from "react"
import DevImage from "../assets/images/cid.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


export default function Info () {
    return (
        <div className="info">
            <img src={DevImage} alt="Developer" className="dev-image" />
            <div className="info--details">
                <h1>Afonne-CID Paul Onyedikachi</h1>
                <h4>FullStack Developer</h4>
                <h3>www.afonne.com</h3>
            </div>
            <div className="info--buttons">
                <button id="button--email" className="button">
                    <li><FontAwesomeIcon icon={faEnvelope} /></li>
                    Email
                </button>
                <button id="button--linkedin" className="button">
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}