import React from 'react';

class HomeFifthSection extends React.Component {
    render() {
        return (
            <div id="HomeFifthSection" style={{ backgroundImage: "url('./images/homepage-fifth-background.jpg')" }}>
                <div className="home-fifth-content">
                    <div className="home-fifth-content-left-address">
                        <h5>Ekologiczna Pralnia Wodna „Cytrynka”</h5>
                        <h5>ul. Kołobrzeska 35</h5>
                        <h5>78-111 Ustronie Morskie</h5>
                        <h5><a href="mailto: abc@example.com">biuro@pralniacytrynka.pl</a></h5>
                        <h5>telefon: +48 573 355 294</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeFifthSection;