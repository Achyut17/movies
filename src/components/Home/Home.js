import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import MovieList from '../MovieList/MovieList'

const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
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