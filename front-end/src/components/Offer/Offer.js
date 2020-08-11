import React from 'react';
import {withRouter} from 'react-router-dom';
import OfferContainerUpper from './OfferContainerUpper';
import OfferContainerLower from './OfferContainerLower';
import OfferContainerTransport from './OfferContainerTransport';
import './offer.css';

function Offer(props)  {
        return (
            <section id="Offer">
                <div className="offer-container" style={{ backgroundImage: "url('./images/offer-background.png')" }}>
                    <OfferContainerUpper />
                    <OfferContainerLower onClick={() => props.history.push("/contact")}/>
                    <OfferContainerTransport />
                </div>
            </section>
        )
}

export default withRouter(Offer);