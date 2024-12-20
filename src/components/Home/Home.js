import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import MovieList from '../MovieList/MovieList'

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry"
  const showText = "Friends"

  useEffect(()=>{
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  },[dispatch])
  return (
    <div>
      <div className="banner-image">
        <MovieList/>
      </div>
    </div>
  )
}

export default Home