import React from 'react';
import './App.css';
import { Nav } from './components/Nav'
import { Banner } from './components/Banner'
import { ServicesList } from './components/ServicesList'
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <ServicesList />
    </div>
  );
}

export default App;
