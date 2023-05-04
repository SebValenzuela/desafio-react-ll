import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar"
import Router from "./components/router"
import Context from "./context";
import {useEffect, useState} from "react"

function App() {

  const [characters,setCharacters] = useState([])
  const globaState = { characters,setCharacters }

  useEffect(() =>{
    fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => setCharacters(data.results.map(val => {
      return {...val,favorito:false}
    })))
  },[])

  return (
    <Context.Provider value={globaState}>
      <BrowserRouter>
        <Navbar/>
        <Router/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
