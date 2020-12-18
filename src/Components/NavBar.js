import React from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
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
                return <NavLink exact strict to = {endPoint} key = {index} className="category" activeClassName="activeLink">
                        <h2>{item}</h2>
                      </NavLink>;
            })
          }
        </div>
      </Router>  
    </>
  );
}
