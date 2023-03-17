import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MovieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'
import { addMovies } from '../../features/movies/movieSlice'
import MovieList from '../MovieList/MovieList'

const Home = () => {
  const movieText = "Harry"
  const dispatch = useDispatch();

  useEffect(()=>{
    const fetchMovies = async() => {
      const response = await MovieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`).catch((err)=>console.log("EROOR",err))
      dispatch(addMovies(response.data));
    }
    fetchMovies()
  },[])
  return (
    <div>
      <div className="banner-image">
        <MovieList/>
      </div>
    </div>
  )
}

export default Home