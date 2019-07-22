import React, { Component } from 'react';
import './App.scss';
import Navigation from './components/Navigation';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Navigation />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
