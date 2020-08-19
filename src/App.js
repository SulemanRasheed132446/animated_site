import React from 'react';
import './App.css';
import { Nav } from './components/Nav'
import { Banner } from './components/Banner'
import { ServicesList } from './components/ServicesList'
import { InfoList } from './components/InfoList'
import { Carousel } from './components/Carousel'
import { Footer } from './components/Footer'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <ServicesList />
      <InfoList />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
