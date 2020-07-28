import React from 'react';
import HomeHeaderSection from './HomeHeaderSection';
import HomeSecondSection from './HomeSecondSection';
import HomeThirdSection from './HomeThirdSection';
import HomeFourthSection from './HomeFourthSection';
import HomeFifthSection from './HomeFifthSection';
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <div id="Home">
                <HomeHeaderSection />
                <HomeSecondSection />
                <HomeThirdSection />
                <HomeFourthSection />
                <HomeFifthSection />
            </div>
        )
    }
}

export default Home;