import React from 'react';
import {withRouter} from 'react-router-dom';
import './offer.css';

function Offer(props)  {
        return (
            <div id="Offer">
                <div className="offer-container">
                    <div className="offer-container-upper">
                        <div className="offer-container-first-text offer-container-box">
                            <div className="offer-container-first-text-wrapper">
                                <h1>Zapraszamy</h1>
                                <h3>obiekty noclegowe,</h3>
                                <h3>gastronomiczne,</h3>
                                <h3>firmy,</h3>
                                <h3>klientów indywidualnych i wszystkich zainteresowanych.</h3>
                            </div>
                        </div>
                        <div className="offer-container-first-image offer-container-box">
                        <img src="./images/child.jpg" alt="" />
                        </div>
                    </div>
                    <div className="offer-container-lower">
                        <div className="offer-container-second-image offer-container-box">
                        <img src="./images/towel.jpg" alt="" />
                        </div>
                        <div className="offer-container-second-text offer-container-box">
                        <div className="offer-container-second-text-wrapper">
                        <h3>W celu uzyskania szczegółowych</h3>
                            <h3>informacji na temat oferty,</h3>
                            <h3>cen oraz współpracy</h3>
                            <h3>prosimy o kontakt pod numerem telefonu</h3>
                            <h3><span>+48 573 355 294</span></h3> 
                            <h3>mailowo bądź za pomocą</h3>
                            <h3><span onClick={() => props.history.push("/contact")}>formularza kontaktowego.</span></h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default withRouter(Offer);