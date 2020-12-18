import {React , useState,useEffect} from 'react'
import useFetch from './useFetch';
import '../App.css';

export default function MovieList() {
  
  const {movies} = useFetch();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "/w400";

  return (
    <div className="movie-list">
      {
        movies.map((movie)=>{
          let path = baseImgUrl + size + movie.backdrop_path; //full image path 
          return  <div className= "movie-item" key = {movie.id}>
                    <img alt = "movie" src = {path}/>
                    <p className="movie-title">{movie.title}</p>
                  </div>
        })
      }
    </div>
  );
}
