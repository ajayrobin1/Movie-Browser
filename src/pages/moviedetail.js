import Hero from './hero'

import Credit from './credit';

import { useParams } from 'react-router-dom';

import {useState, useEffect} from 'react';




function MovieView(){

    const [movieDetails, setMovieDetails]=useState('');

    const {id}=useParams()
    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=fc402eb42e9c4cfd52571fadaea3b942&language=en-US`)
        .then(response=>response.json())
        .then(data=>{
        setMovieDetails(data)
        
    })

    },[id])

    

    let posterUrl=''
    let backDropUrl=''

    if (movieDetails.poster_path){

        posterUrl=`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`

    }

    if(movieDetails.backdrop_path){

        backDropUrl=`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`

    }

    
    

    const genres=[]
    let gen=movieDetails.genres
    for (let x in gen){
        genres.push(gen[x].name+' ')
    }

    

    if (movieDetails.original_title){
        var title=movieDetails.original_title
        return(
            <>
            <Hero text={title} backdrop={backDropUrl} />

         
    
            <div className='container p-3'>
                <div className='row'>
                <div className='col-sm-10 col-md-12 col-lg-4'>
                <img src={posterUrl} className="img-fluid rounded" alt={movieDetails.orginal_title} />
                </div>


                <div className=' col-md-12 col-sm-10 col-lg-8 '>
                    <div className='card '>
                        <div className='card-body'>
                            <h5>Overview</h5>
                            <p>{movieDetails.overview}</p>
                        </div>
                    </div>
    
                    <div className='card'>
    
                        <div className='card-body'>
                            <h5>Tagline:</h5>
                            <p>{movieDetails.tagline}</p> 
                        </div>
    
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Released Date: </h5>
                            <p>{ movieDetails.release_date}</p>
                        </div>
                    </div>
    
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Genres</h5>
                            <p>{genres}</p>
                        </div>
                    </div>
                    
                </div>
    
                </div>

                <Credit/>
    
                
    
            
            </div>
            </>
        )
    } else {

        title='Loading...';
        return(
            <>
            <Hero text={title} />

            </>
        )
    }

    
}

export default MovieView;
