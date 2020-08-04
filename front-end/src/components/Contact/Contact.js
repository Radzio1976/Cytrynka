import React from 'react';
import './contact.css';
import GoogleMapContainer from './GoogleMapContainer';
import AddressAndContactFormContainerTitle from './AddressAndContactFormContainerTitle';
import AddressAndContactFormContainerContentLeft from './AddressAndContactFormContainerContentLeft';
import AddressAndContactFormContainerContentRight from './AddressAndContactFormContainerContentRight';

class Contact extends React.Component {
    render() {
        return (
            <div id="Contact" style={{backgroundImage: "url('./images/washing-maschine-drum-2.jpg')"}}>
                <div className="contact-container">
                    <GoogleMapContainer />
                    <div className="address-and-contact-form-container">
                        <AddressAndContactFormContainerTitle />
                        <div className="address-and-contact-form-container-content">
                            <AddressAndContactFormContainerContentLeft />
                            <AddressAndContactFormContainerContentRight />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;