import './App.css';
import React from 'react';
// import ReactParticles from './components/ReactParticles/ReactParticles';
import './components/Navigation/Navigation'
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank'



function App() {
 
  return (
    <div className="App">
      {/* <ReactParticles/> */}
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
