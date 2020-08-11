import React from 'react';
import HomeFirstSection from './HomeFirstSection';
import HomeSecondSection from './HomeSecondSection';
import HomeThirdSection from './HomeThirdSection';
import HomeFourthSection from './HomeFourthSection';
import HomeFifthSection from './HomeFifthSection';
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <section id="Home">
                <HomeFirstSection />
                <HomeSecondSection />
                <HomeThirdSection />
                <HomeFourthSection />
                <HomeFifthSection />
            </section>
        )
    }
}

export default Home;