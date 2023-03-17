import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MovieApi from '../../common/api/MovieApi'
import { APIKey } from '../../common/api/MovieApiKey'

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async (term) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`).catch((err) => console.log("EROOR", err))
        return (response.data);
    })

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async (term) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`).catch((err) => console.log("EROOR", err))
        return (response.data);
    })

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',
    async (id) => {
        const response = await MovieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`).catch((err) => console.log("EROOR", err))
        return (response.data);
    })

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow : {},
}

const wait = "....Loading please wait"

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => { console.log(wait) },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => { console.log("FETCHED SUCCESSFULL"); return { ...state, movies: payload } },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => { console.log("FETCHED SUCCESSFULL"); return { ...state, shows: payload } },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => { console.log("FETCHED SUCCESSFULL"); return { ...state, selectedMovieOrShow: payload } },
        [fetchAsyncMovies.rejected]: () => { console.log("REJECTED") }

    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer;