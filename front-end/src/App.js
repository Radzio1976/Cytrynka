import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Offer from './components/Offer';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  state = {
    content: []
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/offer" component={Offer} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App;
