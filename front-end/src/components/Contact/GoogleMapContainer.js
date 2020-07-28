import React from 'react';

class GoogleMapContainer extends React.Component {
    render() {
        return(
            <div className="google-map-container">
            <iframe title="Google Map" frameBorder="0" style={{ width: "100%", height: "100%"}} 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.9057354165193!2d15.747823215319915!3d54.19945311816867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47003bfbd8a54b39%3A0x4996331d3b720fa!2sKo%C5%82obrzeska%2035%2C%2078-111%20Ustronie%20Morskie!5e0!3m2!1spl!2spl!4v1594315691834!5m2!1spl!2spl">
    </iframe>
            </div>
        )
    }
}

export default GoogleMapContainer;