import React from 'react';
import Hero from './hero';

import { Link } from 'react-router-dom';





const MovieCard=({movie})=>{

    if(movie.poster_path){

        var  posterUrl=`https://image.tmdb.org/t/p/w500/${movie.poster_path}` 

    }else{

        posterUrl=require("./image-not-found.jpg")
    }

    const detailUrl=`/moviedetail/${movie.id}`;



    return(
        <div className='col-4 col-md-6 col-lg-2 my-3'>
            
                    {/* <p className="card-text">text</p> */}

                    <Link to={detailUrl} style={{'textDecoration':'none'}}>

                   

                    <div className="card h-100 ">
                    
                        <img src={posterUrl} className="card-img" alt={movie.original_title} />

                        <div className='card-body'>
                        <p className="card-title text-truncate">{movie.original_title}</p>

                        </div>

                        
            </div>
                        

                        
                    </Link>
                
        </div>
    )
}




const Search =({keyword, result}) =>{

    // console.log(result)



    if(result.length){
    const resultsHtml=result.map((obj)=><MovieCard key={obj.id}  movie={obj}/>)
    return(
        <>
        <Hero text={`You are searching for "${keyword}"`} />

        <div className='container'>
            <div className='row'>
            {resultsHtml}
            </div>
        </div>            
        </>
    )

    }else{
        const resultNotFound=require('./resultNotfound.jpg') 

        return(
            <>
            <Hero text={"Result not found"} />
            <div className='container'>
            <img src={resultNotFound} className="img-fluid" alt='Not found'/>
            </div>
            
            </>  
        )
        
    }




}

export default Search