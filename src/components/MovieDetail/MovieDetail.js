import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow } from '../../features/movies/movieSlice'
import "./MovieDetail.css"

const MovieDetail = () => {
  const {imdbID} = useParams()
  const disptach = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)
  console.log(data);
  useEffect(()=>{
    disptach(fetchAsyncMovieOrShowDetail(imdbID))
  },[disptach,imdbID])
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>IMDB RAting <i className="fa fa-star"></i> :{data.imdbRating}</span>
          <span>IMDB votes <i className="fa fa-thumbs-up"></i> :{data.imdbVotes}</span>
          <span>IMDB Runtime <i className="fa fa-film"></i> :{data.Runtime}</span>
          <span>Year <i className="fa fa-calender"></i> :{data.Year}</span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director</span>
          <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
          <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres</span>
          <span>{data.Genres}</span>
          </div>
          <div>
            <span>Languages</span>
          <span>{data.Languade}</span>
          </div>
          <div>
            <span>Awards</span>
          <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  )
}

export default MovieDetail