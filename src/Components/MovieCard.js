import React ,{forwardRef} from 'react';

const  MovieCard = forwardRef((props,ref) => {
  
  return (
    <div ref = {ref} className="movie-item">
      <img alt = "movie" src = {props.path}/>
      <h4 className="movie-overview"> {props.overview}</h4>
      <p className="movie-title">{props.title}</p> 
    </div>
                             
  );
});

export default MovieCard;
