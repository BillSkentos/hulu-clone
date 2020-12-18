import {React,useState,useEffect} from 'react';


export default function useFetch() {
  
  const key = process.env.REACT_APP_API_KEY
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`;
  const [movies,setMovies] = useState([]);
  const [loading,setLoading] = useState(false); //load until you receive movie data 

  useEffect(()=>{

    const fetchMovies = async()=>{
       let response = await fetch(url).catch(err=>console.error(err));
       let res = await response.json().catch(err=>console.error(err));
       setMovies(res.results);
       console.log({movies});
    } 

    fetchMovies();

  },[]);

  return {movies};

}
