import {createContext, React,useContext,useState} from 'react';
import genreLinks from './Genres';

const AppContext = createContext();

export default function ContextProvider(props) {
  
  const [selectedGenre,setSelectedGenre]= useState(genreLinks.fetchTrending);
  
  const values = {
    selectedGenre,
    setSelectedGenre,
  }

  return (
    <AppContext.Provider value = {values}>
        {props.children} 
    </AppContext.Provider>
  );
}


export function useAppContext(){
  return useContext(AppContext);
}
