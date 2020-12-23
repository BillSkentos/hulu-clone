import {React,useState,useEffect} from 'react';
import {useAppContext} from './Context';
import MovieCard from './MovieCard';
import FlipMove from 'react-flip-move';

export default function FetchResults() {
 
  const {selectedGenre,setSelectedGenre} = useAppContext();  
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    
    const fetchMovies = async ()=>{
      let response = await fetch(selectedGenre).catch(err=>console.error(err)); 
      let res = await response.json().catch(err=>console.error(err));
      setMovies(res.results);
      
    } 

    fetchMovies();

  },[selectedGenre]);

  return (
    
    <div className="movie-list">       
      <FlipMove typeName = {null}>
      {
          movies.map((movie,index)=>{
            return (
              <MovieCard key = {movie.id} movie={movie}/>
            );
          })
      }
      </FlipMove>           
    </div>
    
  );

}
