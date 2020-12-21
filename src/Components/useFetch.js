import {React,useState,useEffect} from 'react';


export default function useFetch() {

  const key = process.env.REACT_APP_API_KEY;

  // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`;
  
  const specificTypes = [
    {'Type':'Top Rated', 'url' :`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`},
    {'Type':'Trending', 'url' :`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`},
  ];

  const genres = [
    {"id":28 , "Name": "Action"},
    {"id":35 , "Name":"Comedy"},
    {"id":27 , "Name":"Horror"},
    {"id":37 , "Name":"Western"},
    {"id":10749 , "Name":"Romance"},
    {"id":878 , "Name":"Science Fiction"},
    {"id":16 , "Name":"Animation"},
    {"id":9648 , "Name":"Mystery"},
    {"id":10770 , "Name":"TV Movie"},
  ];

  const [movieTypes,setMovieTypes] = useState([]);

  useEffect(()=>{
    
    const fetchSpecificTypes = async ()=>{
      
      const results = await Promise.all(specificTypes.map(type => fetch(type.url)));
      const results2 = await Promise.all(results.map(res => res.json()));
      const movies = results2.map(res => res.results);
      setMovieTypes(movies);
    } 

    fetchSpecificTypes();

  },[]);

  return {movieTypes};

}
