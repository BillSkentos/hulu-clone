import {createContext, React,useContext,useState,useEffect} from 'react';

const AppContext = createContext();

export default function ContextProvider(props) {
  
  const [selectedGenre,setSelectedGenre]= useState('Trending');
  
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
