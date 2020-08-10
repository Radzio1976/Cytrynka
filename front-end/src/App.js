import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Navigation from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  state = {
    content: []
  }

  render() {
    return (
      <HashRouter>
          <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/offer" component={Offer} />
            <Route path="/contact" component={Contact} />
          <Footer />
      </HashRouter>
    )
  }
}

export default App;
