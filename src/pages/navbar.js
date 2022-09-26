import React from 'react';

import {useNavigate} from 'react-router-dom' ;





function Navbar({searchText, setSearchText, firstResult}){

  const navigate=useNavigate()

  const getUrl=()=>{
    
    navigate(`/moviedetail/${firstResult.id}`)
  
  }
  


  const updateResult=(e)=>{
    
    navigate('/search')
    setSearchText(e.target.value)
  }

 
    
        return(
            <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    <a className="navbar-brand"  href="/">Movie Browser</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon " id="icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">about</a>
        </li>
        
        
      </ul>
      <form className="d-flex" role="search" onSubmit={getUrl}  method='get'>
        <input className="form-control me-2 bg-light" type="search" placeholder="Search" aria-label="Search" 
        value={searchText}
          onChange={updateResult} 
          href='\search'
          />
          

        {/* <Link   className="btn btn-outline-primary"> Search</Link> */}


        <button className="btn btn-outline-dark"  type="submit" >Search</button>

        </form>
      
    </div>
  </div>
</nav>
  
  )}

export default Navbar