import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import {useAppContext} from './Context';
import genreLinks from './Genres';

export default function NavBar() {
   
  const {selectedGenre,setSelectedGenre} = useAppContext();

  const goToGenre = (genre)=>{
    //remove '/' from genre   
    genre = genre.slice(1);

    let genreUrl = `fetch${genre}`;
    if (genreUrl === 'fetch'){
      genreUrl = 'fetchTrending';
    }
    
    for (let [key,value] of Object.entries(genreLinks)){
      if(genreUrl === key){ 
        setSelectedGenre(value);
      }
    }
  
  }
    

  
  
  //create categories  of movies to navigate 
  let categories = ['Trending' , 'Top Rated' , 'Action' , 'Comedy' , 'Horror' , 'Romance' , 
  'Mystery' , 'Science Fiction' , 'Western' , 'Animation' , 'Tv Movie' ];

  return (
    <>
      <Router>
        <div className = "nav-container">
          {
              categories.map((item,index)=>{
                let endPoint = index === 0 ? '/' : `/${item.replace(/\s/g,'')}`; //creates endpoint for link 
                    return <NavLink 
                            onClick = {()=>goToGenre(endPoint)} 
                            exact strict to = {endPoint} key = {index} 
                            className="category" 
                            activeClassName="activeLink"
                           >
                              <h2 >{item}</h2>
                          </NavLink>;
            })
          }
        </div>
      </Router>  
    </>
  );
}
