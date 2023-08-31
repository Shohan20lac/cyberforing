import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Foreground from './components/Foreground';

import {React, useState} from 'react';

function App() {

  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const handleButtonClick = (screenMode) => {
    console.log("Before: ", currentScreenIndex)
    setCurrentScreenIndex (screenMode)
    console.log ("After:", currentScreenIndex)
  }

  return (
    <div className="App-header">

        <Header/>
        <Navbar
          handleButtonClick = {handleButtonClick}
          currentScreenIndex     = {currentScreenIndex}
          setCurrentScreenIndex  = {currentScreenIndex}
        />

        <Foreground
          currentScreenIndex = {currentScreenIndex}
        />
    </div>
  );
}

export default App;