import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movie: null,
    trailer: "",
    poster: "",
    movieList: {},
  },
  reducers: {
    addMovie: (state, action) => {
      // console.log("yes");
      state.movie = action.payload;
    },
    removeMovie: (state, action) => {
      state.movie = null;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    },
    removeTrailer: (state, action) => {
      state.trailer = "";
    },

    addPoster: (state, action) => {
      state.poster = action.payload;
    },
    removePoster: (state, action) => {
      state.poster = "";
    },

    addMovieList: (state, action) => {
      // console.log(action);
      state.movieList[action.payload.title] = action.payload.data;
    },
    removeMovieList: (state, action) => {
      state.movieList = {};
    },
  },
});

export default moviesSlice.reducer;
export const {
  addMovie,
  removeMovie,
  addTrailer,
  removeTrailer,
  addPoster,
  removePoster,
  addMovieList,
  removeMovieList,
} = moviesSlice.actions;
