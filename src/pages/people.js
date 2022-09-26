import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import {useLocation} from "react-router-dom";

import { Link } from 'react-router-dom'

import Hero from './hero'

const MovieCard=({movie})=>{

    if(movie.poster_path){

        var  posterUrl=`https://image.tmdb.org/t/p/w500/${movie.poster_path}` 

    }else{

        posterUrl=require("./image-not-found.jpg")
    }

    const detailUrl=`/moviedetail/${movie.id}`;



    return(
        <>
        <div className='col-lg-2 col-4 my-2'>
            
                    {/* <p className="card-text">text</p> */}

                    <Link to={detailUrl}  style={{'textDecoration':'none'}}>
                    <div className="card" >
                <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
                <div className="card-body">
                    <p className="card-title text-truncate">{movie.original_title}</p>
                    </div>
            </div>


                    </Link>
                
        </div>
        </>
    )
}


function Person(){

    const {pid}=useParams();

    const search = useLocation().search;
    const name = new URLSearchParams(search).get('q');


    const [movies, setMovieList]=useState([])

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${pid}/movie_credits?api_key=fc402eb42e9c4cfd52571fadaea3b942&language=en-US`)
        .then(response=>response.json())
        .then(data=>{
            setMovieList(data)
        
    })
},[pid])


// console.log(trendList.results)

let resultsHtml

if(movies.cast){

    const listGet=movies.cast

    // console.log(listGet)
    listGet.sort((a,b) => b.popularity-a.popularity
    );

    

     resultsHtml=listGet.map((obj)=><MovieCard key={obj.id}  movie={obj}/>)

}


        return(

            <div>
            <Hero text={`Movies of "${name}"`}/>

            <div className='container'>

                <div className='row '>
                     {resultsHtml}

                </div>
            </div>
            </div>
        )
}

export default Person;