import React from 'react';
import useFetch from './useFetch';
import '../App.css';

export default function MovieList() {
  
  const {movieTypes} = useFetch();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "/w400";
  

  return (
    <div className="movie-list">
      {
        movieTypes.map(movie=>{ //map through data of each movie 
          return (
            <>
              {
                Object.values(movie).map((val,k)=>{
                    let path = baseImgUrl + size + val.backdrop_path; //full image path
                    return <div className= "movie-item" key = {val.id}>
                              <img alt = "movie" src = {path}/>
                              <h4 className="movie-overview"> {val.overview} </h4>
                              <p className="movie-title">{val.title}</p>
                    </div>
                })
              }
            </>
          )
        })  
      }
    </div>
  );
}
