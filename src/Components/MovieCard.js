import React ,{forwardRef} from 'react';

const  MovieCard = forwardRef(({movie},ref) => {
  
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "/w400";
  let path = baseImgUrl + size + (movie.backdrop_path||movie.poster_path);

  return (
    <div className="movie-item" ref = {ref}>
      <img alt = "movie" src = {path}/>
      <h4 className="movie-overview"> {movie.overview}</h4>
      <p className="movie-title">{movie.title}</p> 
    </div>
                            
  ); 
});

export default MovieCard;
