import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  state = {
    content: []
  }

  render() {
    return (
      <HashRouter>
          <Header />
            <Route path="/" exact component={Home} />
            <Route path="/offer" component={Offer} />
            <Route path="/contact" component={Contact} />
          <Footer />
      </HashRouter>
    )
  }
}

export default App;
