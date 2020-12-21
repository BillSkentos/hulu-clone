import React, { Fragment} from 'react';
import useFetch from './useFetch';
import '../App.css';
import {useAppContext} from './Context';
import FlipMove from 'react-flip-move';
import MovieCard from './MovieCard';
export default function MovieList() {
  
  const {movieTypes} = useFetch();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "/w400";
  const {selectedGenre} = useAppContext(); //active movie genre 
  

  //display movie list based on genre 
  return (
    <div className="movie-list">
         {
           movieTypes.map((type,index)=>{
             if(type.Name === selectedGenre ){
                 return (
                      <Fragment key = {index}>
                       <FlipMove typeName={null}>
                          {
                              (type.Movies).map(movie=>{
                                let path = baseImgUrl + size + movie.backdrop_path;
                                return (
                                      <MovieCard key = {movie.id} overview = {movie.overview} path = {path} title = {movie.title}/>
                                );
                              })
                          }
                        </FlipMove> 
                        
                      </Fragment>
                 );
             }
           })
         }
    </div>
  );
}
