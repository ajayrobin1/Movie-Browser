import { useParams, Link } from 'react-router-dom';

import {useState, useEffect} from 'react';



const ActorCard=({actor})=>{

    if(actor.profile_path){

        var  profilerUrl=`https://image.tmdb.org/t/p/w500/${actor.profile_path}` 

    }else{

        profilerUrl=require("./image-not-found.jpg")
    }



    return(
        <div id='actcard' className=' col-lg-2 col-md-3 col-sm-4 col-6'>

            <Link to={`/credit/${actor.id}?q=${actor.name}`}  style={{'textDecoration':'none'}}>
                <div className="card h-auto ">
                    <img src={profilerUrl} className="card-img-top" alt={actor.name} />
                    <div className="card-body">
                    
                    <p className='text-truncate'><strong>{actor.name}</strong></p>
                    <p className='text-truncate' >{actor.character}</p>
                    {/* <p className="card-text">text</p> */}

                    
                </div>
            </div>
         
            </Link>
                     
                
        </div>
    )
}




function Credit(){

    const [creditList, setCreditList]=useState([])



    const {id}=useParams()
    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=fc402eb42e9c4cfd52571fadaea3b942&language=en-US`)
        .then(response=>response.json())
        .then(data=>{
            setCreditList(data)
        
    })

    },[id])


    if(creditList.cast){

        let filterdList=creditList.cast.slice(0,10)


        var resultsHtml=filterdList.map((obj)=><ActorCard key={obj.id}  actor={obj}/>)

    }


    

    return(
        <>

        <div className='container'>
            <h2>Top Cast</h2>
            <div className='row flex-row flex-nowrap overflow-auto'>
            {resultsHtml}

            </div>
        </div>            
        </>
    )

}

export default Credit