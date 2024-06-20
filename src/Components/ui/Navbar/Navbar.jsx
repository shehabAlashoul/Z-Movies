import React, { useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  useEffect(()=>{
    const search_btn = document.getElementById('search_btn')
    const search_input = document.getElementById('search_input')
    const close_btn = document.getElementById('close_btn')
    search_btn.addEventListener('click',()=>{
      search_input.style.top = '80px'
      close_btn.style.display = 'inline-block'
      search_btn.style.display = 'none'
    })
    close_btn.addEventListener('click',()=>{
      search_input.style.top = '0px'
      close_btn.style.display = 'none'
      search_btn.style.display = 'inline-block'
    })
  },[])
  return (<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary position-fixed start-0 end-0 bg-dark-blue">
  <div className="section1 container-fluid pt-2 pb-2">
    <Link to='/' className="navbar-brand fw-bold fs-3" href="#">Z-Movies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Movies
          </Link>
          <ul className="dropdown-menu">
            <li><Link to='movies/popular' className="dropdown-item text-dark" href="#">Popular</Link></li>
            <li><Link to='movies/now_playing' className="dropdown-item text-dark" href="#">Now Playing</Link></li>
            <li><Link to='movies/upcoming' className="dropdown-item text-dark" href="#">Upcoming</Link></li>
            <li><Link to='movies/top_rated' className="dropdown-item text-dark" href="#">Top Rated</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TV Shows
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-dark" href="#">Popular</Link></li>
            <li><Link className="dropdown-item text-dark" href="#">Airing Today</Link></li>
            <li><Link className="dropdown-item text-dark" href="#">On TV</Link></li>
            <li><Link className="dropdown-item text-dark" href="#">Top Rated</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            People
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item text-dark" href="#">Popular People</Link></li>
          </ul>
        </li>
      </ul>
      <Link href='#' className='nav-link'><i className="fa-solid fa-user"></i> Profile</Link>
    </div>
  </div>
      <div className="">
      <button id='search_btn' class="btn position-relative top-0"><i className="fa-solid fa-magnifying-glass text-white"></i></button>
      <button id='close_btn' class="btn position-relative top-0" style={{display:'none'}}><i className="fa-solid fa-xmark fa-lg text-white"></i></button>
      </div>
</nav>
  <input id='search_input' className="form-control me-2 rounded-5 position-absolute start-0 end-0" type="search" placeholder="Search" aria-label="Search"/>
</>
  )
}

export default Navbar