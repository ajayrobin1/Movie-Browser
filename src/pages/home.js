import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

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
        <div className='col-4 col-md-6 col-lg-3 my-2'>
            <Link to={detailUrl} style={{'textDecoration':'none'}} >
                <div className="card h-100">
                    <img src={posterUrl} className="card-img" alt={movie.original_title} />
                    <div className="card-body">
                        <p className="card-title text-truncate" >{movie.original_title}</p>
                    </div>
                </div>    
            </Link>   
        </div>
        </>
    )
}


function Home(){

    const [trendList, setTrendList]=useState([])

    const {id}=useParams

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=fc402eb42e9c4cfd52571fadaea3b942')
        .then(response=>response.json())
        .then(data=>{
        setTrendList(data)
        
    })
},[id])


// console.log(trendList.results)

let resultsHtml

if(trendList.results){

     resultsHtml=trendList.results.slice(0,12).map((obj)=><MovieCard key={obj.id}  movie={obj}/>)

}





        return(

            <>
            <Hero text="Welcome to movie browser"/>
                
           
            

          
                <div className='col-lg-2'></div>
                    <div className='container col-lg-8'>
                        <h3 id='head' className='my-2'>Trending movies</h3>

                        <div className='row'>
                            {resultsHtml}
                        </div>
                    </div>
                    <div className='col-lg-2'></div>

            
            </>
        )
}

export default Home;