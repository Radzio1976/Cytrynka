import React from 'react';

class OfferContainerUpper extends React.Component {
    render() {
        return(
            <section className="offer-container-upper">
                <div className="offer-container-first-text offer-container-box">
                    <div className="offer-container-first-text-wrapper">
                        <h3>Oferujemy :</h3>
                            <ul>
                                <li>- pranie bielizny hotelowej (pościele,ręczniki,szlafroki itp.)</li>
                                <li>- tekstyliów dla restauracji i innych obiektów gastronomicznych</li>
                                <li>- pranie odzieży roboczej</li>
                                <li>- maglowanie</li>
                                <li>- składanie i pakowanie</li>
                            </ul>
                            <h3>Zapraszamy obiekty noclegowe,</h3>
                            <h3>gastronomiczne, firmy,</h3>
                            <h3>klientów indywidualnych i wszystkich zainteresowanych.</h3>
                    </div>
                </div>
                <div className="offer-container-first-image offer-container-box">
                    <img src="./images/child.jpg" alt="" />
                </div>
            </section>
        )
    }
}

export default OfferContainerUpper;