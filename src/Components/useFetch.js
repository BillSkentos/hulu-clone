import {React,useState,useEffect} from 'react';


export default function useFetch() {

  const key = process.env.REACT_APP_API_KEY;

  
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
    
    const fetchMovies = async ()=>{
      
      const promises = []; //array to store movie objects 

      //fetch trending and top rated  -----------------------------------------------------------------------------------
      for(let i=0; i<specificTypes.length; i++) {
        let response = await fetch(specificTypes[i].url).catch(err=>console.error(err));
        let res = await response.json().catch(err=>console.error(err));
        let genre = {'Name' : specificTypes[i].Type , 'Movies': res.results };  //genre with all movies 
        promises.push(genre);
      }

      //fetch by normal genre type --------------------------------------------------------------------------------------
      for(let i=0; i<genres.length; i++) {
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genres[i].id}`;
        let response = await fetch(url).catch(err=>console.error(err));
        let res = await response.json().catch(err=>console.error(err));
        let genre = {'Name' : genres[i].Name , 'Movies': res.results };  //genre with all movies 
        promises.push(genre);
      }
      
      setMovieTypes(promises);
    } 

    fetchMovies();

  },[]);

  return {movieTypes};

}
