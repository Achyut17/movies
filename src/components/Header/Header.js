import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import "./Header.css"

const Header = () => {
  const [term, setTerm] = useState("")
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("please enter search term")
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
  }

  return (
    <div className="header">
      <Link to="/" >
        <div className="logo">Movies APP</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={term} placeholder="Search Movies or Shows" onChange={(e) => setTerm(e.target.value)} />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src="https://picsum.photos/270?random=1" alt="user" />
      </div>
    </div>
  )
}

export default Header