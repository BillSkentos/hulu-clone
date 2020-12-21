import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';
import ContextProvider from './Components/Context';

function App() {

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <NavBar />
        <MovieList />
      </div>
    </ContextProvider>  
    
  );
}

export default App;
