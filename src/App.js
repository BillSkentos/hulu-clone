import React from 'react';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';

function App() {

  return (
    <div className="App">
       <Header />
       <NavBar />
       <MovieList />
    </div>
  );
}

export default App;
