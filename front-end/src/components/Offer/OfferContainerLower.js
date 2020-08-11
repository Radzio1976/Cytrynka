import React from 'react';

function OfferContainerLower(props) {
        return(
            <section className="offer-container-lower">
                <div className="offer-container-second-image offer-container-box">
                    <img src="./images/towel.jpg" alt="" />
                </div>
                <article className="offer-container-second-text offer-container-box">
                    <div className="offer-container-second-text-wrapper">
                        <h3>W celu uzyskania szczegółowych</h3>
                        <h3>informacji na temat oferty,</h3>
                        <h3>cen oraz współpracy</h3>
                        <h3>prosimy o kontakt pod numerem telefonu</h3>
                        <h3><span>+48 573 355 294</span></h3> 
                        <h3>mailowo: <span><a href="mailto: biuro@pralniacytrynka.pl">biuro@pralniacytrynka.pl</a></span></h3>
                        <h3>bądź za pomocą</h3>
                        <h3><span onClick={props.onClick}>formularza kontaktowego.</span></h3>
                    </div>
                </article>
            </section>
        )
}

export default OfferContainerLower;