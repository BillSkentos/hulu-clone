import React , {Fragment} from 'react';
import useFetch from './useFetch';
import '../App.css';
import {useAppContext} from './Context';
import MovieCard from './MovieCard';


export default function MovieList() {
  
  const {movieTypes} = useFetch();
  
  const {selectedGenre} = useAppContext(); //active movie genre ex. horror 
  

  //display movie list based on genre 
  return (
    <div className="movie-list">
        {
           movieTypes.map((type,index)=>{
             if(type.Name === selectedGenre ){
                 return (
                        <Fragment key = {index}>
                        {
                            (type.Movies).map(movie=>{
                              return (
                                  <MovieCard key = {movie.id} movie={movie}/>
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
