import React from 'react';

class HomeFirstSection extends React.Component {
    render() {
        return (
            <section id="HomeFirstSection" style={{ backgroundImage: "url('./images/background.jpg')" }}>
                <header className="home-first-section-title">
                    <h1>Cytrynka</h1>
                </header>
                <article className="home-first-section-article">
                    <h3>nowoczesna pralnia wodna</h3>
                    <h3>dla obiektów noclegowych, gastronomicznych,</h3>
                    <h3>firm i klientów indywidualnych.</h3>
                </article>
            </section>
        )
    }
}

export default HomeFirstSection;