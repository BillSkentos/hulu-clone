import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar() {
  
  //create categories  of movies to navigate 
  let categories = ['Trending' , 'Top Rated' , 'Action' , 'Comedy' , 'Horror' , 'Romance' , 
  'Mystery' , 'Sci-Fi' , 'Western' , 'Animation' , 'TV Movie' ];

  return (
    <>
      <Router>
        <div className = "nav-container">
          {
            categories.map((item,index)=>{
                let endPoint = index === 0 ? '/' : `/${item.replace(/\s/g,'')}`;
                return <Link to = {endPoint} className="category"><h2  key = {index}>{item}</h2></Link>;
            })
          }
        </div>
      </Router>  
      
    </>
  );
}
