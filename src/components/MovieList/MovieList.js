import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.css"
import {settings} from '../../common/settings'

const MovieList = () => {
  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  const renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>{
      return(
      <MovieCard key={index} data={movie}/>
      )
    })
  ):(<div className="movies-error"><h3>{movies.Error}</h3></div>)

  const renderShows = shows.Response === "True" ? (
    shows.Search.map((movie,index)=>{
      return(
      <MovieCard key={index} data={movie}/>
      )
    })
  ):(<div className="shows-error"><h3>{shows.Error}</h3></div>)

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container"><Slider {...settings}>{renderMovies}</Slider></div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container"><Slider {...settings}>{renderShows}</Slider></div>
      </div>
    </div>
  )
}

export default MovieList