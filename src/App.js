import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import ContextProvider from './Components/Context';
import FetchResults from './Components/FetchResults';
function App() {

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <NavBar />
        <FetchResults />
      </div>
    </ContextProvider>  
    
  );
}

export default App;
