import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
// import Title from './components/Title';
// import PlanetCard from './components/PlanetCard';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        {/* <PlanetCard /> */}
      </>
    );
  }
}

export default App;
