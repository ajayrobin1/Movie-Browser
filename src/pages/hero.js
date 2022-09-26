import React from 'react'

const Hero = ({text, backdrop})=>{
    
        return(

            <header className="bg-dark text-white bg-light hero-container">
                <h1 className="hero-text">{text}</h1 >
                

                <div className="hero-backdrop d-none d-md-block d-lg-block d-xl-block" style={{backgroundImage: `url(${backdrop})`}}> 
                
                </div>
            </header>
            

        )
    }

export default Hero