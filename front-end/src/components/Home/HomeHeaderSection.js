import React from 'react';

class HomeHeaderSection extends React.Component {
    render() {
        return (
            <div id="HomeHeaderSection" style={{ backgroundImage: "url('./images/background.jpg')" }}>
                <div className="home-header-title">
                    <h1>Cytrynka</h1>
                </div>
                <div className="home-header-content">
                    <h3>nowoczesna pralnia wodna</h3>
                    <h3>dla obiektów noclegowych, gastronomicznych,</h3>
                    <h3>firm i klientów indywidualnych.</h3>
                </div>
            </div>
        )
    }
}

export default HomeHeaderSection;