export const SET_MOVIE = "SET_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const CLEAR_PLAYLIST = "CLEAR_PLAYLIST";

export const addMovie = (movie) => ({
  type: SET_MOVIE,
  payload: movie,
});

export const removeMovie = (idMovie) => ({
  type: REMOVE_MOVIE,
  payload: idMovie,
});

export const clearPLaylist = () => ({
  type: CLEAR_PLAYLIST,
});
