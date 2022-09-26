import React from 'react'
import Hero from './hero';


class About extends React.Component{
    render(){
        return(
            <div>
                <Hero text="About us"/>
            <div className='container'>
                About content
            </div>
            </div>
        )
    }
}

export default About