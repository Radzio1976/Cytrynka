import React from 'react';
import {withRouter} from 'react-router-dom';
import './offer.css';

function Offer(props)  {
        return (
            <div id="Offer">
                <div className="offer-container">
                    <div className="offer-container-text">
                        <h3>Oferujemy :</h3>
                        <ul>
                            <li>- pranie bielizny hotelowej (pościele,ręczniki,szlafroki itp.)</li>
                            <li>- tekstyliów dla restauracji i innych obiektów gastronomicznych</li>
                            <li>- pranie odzieży roboczej</li>
                            <li>- maglowanie</li>
                            <li>- składanie i pakowanie</li>
                        </ul>
                        <h4>Zapraszamy klientów indywidualnych oraz firmy, hotele, pensjonaty, restauracje, sale bankietowe, domy weselne i wszystkich innych zainteresowanych.</h4>
                        <h3>ZAPEWNIAMY TRANSPORT OD I DO KLIENTA !</h3>
                        <h4>W celu uzyskania szczegółowych informacji na temat oferty, cen oraz ewentualnej współpracy prosimy o kontakt pod numerem telefonu <span>+48 573 355 294</span>, bądź za pomocą <span onClick={() => props.history.push("/contact")}>formularza kontaktowego</span></h4>
                    </div>
                    <div className="offer-container-image">
                        <img src="./images/towel.jpg" alt="" />
                    </div>
                </div>
            </div>
        )
}

export default withRouter(Offer);