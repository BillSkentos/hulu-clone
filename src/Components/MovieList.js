import React, { Fragment} from 'react';
import useFetch from './useFetch';
import '../App.css';

export default function MovieList() {
  
  const {movieTypes} = useFetch();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "/w400";
  const test  = "Top Rated";


  return (
    <div className="movie-list">
         {
           movieTypes.map((type,index)=>{
             if(type.Name === test ){
                 return (
                   <Fragment key = {index}>
                     {
                        (type.Movies).map(movie=>{
                          let path = baseImgUrl + size + movie.backdrop_path;
                          return (
                            <div className="movie-item" key = {movie.id}>
                              <img alt = "movie" src = {path}/>
                              <h4 className="movie-overview"> {movie.overview}</h4>
                              <p className="movie-title">{movie.title}</p>
                            </div>
                          );
                        })
                     }
                   </Fragment>  
                 );
             }
           })
         }
    </div>
  );
}
