import {  useState } from "react";
//import { useEffect } from "react";
//import { Route, Routes } from "react-router-dom";
//import Food from "../pages/Food";
import Search from "../components/Search"
import Results from "../pages/Results";
import Next from "./Next";
//import Show from "../pages/Show";


function Main(props) {
    const [query, setQuery] = useState([]);
    const [results, setResults] = useState([])
    const [next, setNext] = useState([])

    function handleSearch(e) {

      setQuery(e.target.value);
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      try {
        const apiKey = "36ca755913a6240918f3cbdf0f2efcad"
        const app_id = "a186ee52"
        //const URL = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=5`
        const URL = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=${app_id}&app_key=${apiKey}`
        const response = await fetch(URL)
        const data = await response.json()
        setResults(data.hits)
        setNext(data._links)
      } catch(err) {
        console.log(err)
      }
    }

    async function nextButton(e) {
        try {
            e.preventDefault();
            const URL = next.next.href
            const response = await fetch(URL)
            const data = await response.json()
            setResults(data.hits)
            setNext(data._links)
        } catch(err) {
            console.log(err)
        }
    }
      //cant use route or is there any way I can use it.
    return (
    
      <>
        <Search query={query} handleSearch={handleSearch} handleSubmit={handleSubmit} />
        
        <Results results = {results}/>
        <Next nextButton={nextButton} />
      </>
    )
}

export default Main;