import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import { useEffect } from 'react'


import Home from './pages/home'
import About from './pages/about';
import Navbar from './pages/navbar';
import Search from './pages/search';

import Person from './pages/people';

import MovieView from './pages/moviedetail';
 


function InvalidPage(){
  return(

    <>
    <div class="alert alert-danger" role="alert">

      Invalid Link...!
  </div>
    </>


  )
}


function App(){
  const [searchResult, setSearchResult]=useState([]);
  const [searchText, setSearchText]=useState("");

  useEffect(()=>{

    if (searchText){

      fetch(`
      https://api.themoviedb.org/3/search/movie?api_key=fc402eb42e9c4cfd52571fadaea3b942&language=en-US&query=${searchText}&page=1&include_adult=fase`)
    .then(response =>response.json())
    .then(data=>{
      setSearchResult(data.results)
      //console.log(searchResult)
    })


    }


    
  }, [searchText])


    return(

      <BrowserRouter basename={process.env.PUBLIC_URL}
      >

      <Navbar searchText={searchText} setSearchText={setSearchText} firstResult={searchResult[0]}/>
      <Routes>
      <Route index element={<Home />} />

      <Route path="/about" element={<About />}>
      
        </Route>
      <Route path="/search" element={<Search keyword={searchText} result={searchResult} />}>
      </Route>

      <Route path="/moviedetail/:id" element={<MovieView />} />

      <Route path="/credit/:pid" element={<Person />} />

      <Route path="*" element={<InvalidPage />} />

      

      </Routes>
      
    </BrowserRouter>
      

    )
    
}

export default App;
