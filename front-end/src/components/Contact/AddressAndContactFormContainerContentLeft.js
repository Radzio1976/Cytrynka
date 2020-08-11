import React from 'react';

class AddressAndContactFormContainerContentLeft extends React.Component {
    render() {
        return (
            <section className="address-and-contact-form-container-content-left">
                <div className="address-and-contact-form-container-content-left-phone address-and-contact-container">
                    <img src="./images/phone-icon.png" alt=""></img>
                    <div className="address-and-contact-form-container-content-left-text">
                        <h6>Zadzwoń do nas</h6>
                        <h5>+48 573 355 294</h5>
                    </div>
                </div>
                <div className="address-and-contact-form-container-content-left-address address-and-contact-container">
                    <img src="./images/location-icon.png" alt=""></img>
                    <div className="address-and-contact-form-container-content-left-text">
                        <h6>Lokalizacja</h6>
                        <h5>78-111 Ustronie Morskie</h5>
                        <h5>Kołobrzeska 35</h5>
                    </div>
                </div>
                <div className="address-and-contact-form-container-content-left-email address-and-contact-container">
                    <img src="./images/email-icon.png" alt=""></img>
                    <div className="address-and-contact-form-container-content-left-email-text">
                        <h6>Email</h6>
                        <h5>biuro@pralniacytrynka.pl</h5>
                    </div>
                </div>
            </section>
        )
    }
}

export default AddressAndContactFormContainerContentLeft;