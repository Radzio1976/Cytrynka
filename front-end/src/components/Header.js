import React from 'react';
import { withRouter } from 'react-router-dom';
import "./header.css";

function Header(props) {
    return (
        <header id="Header">
            <div className="main-title-container">
                <div onClick={() => props.history.push("/")} className="logo" style={{ backgroundImage: "url('./images/Logo1.png')" }}></div>
                <h1>Ekologiczna Pralnia Wodna „Cytrynka”</h1>
            </div>
            <nav>
                <ul className="nav">
                    <li onClick={() => props.history.push("/")}>O nas</li>
                    <li onClick={() => props.history.push("/offer")}>Oferta</li>
                    <li onClick={() => props.history.push("/contact")}>Kontakt</li>
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(Header);