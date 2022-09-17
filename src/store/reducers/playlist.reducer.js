import { CLEAR_PLAYLIST, REMOVE_MOVIE, SET_MOVIE } from '../actions/playlist.action';

const initialState = {
  playlist: [],
};

/**
 * @param {{playlist: string[]}} state
 * @param {number} id
 */
const notRepeat = (state, idMovie) => state.findIndex((e) => e.id === idMovie);

/**
 * @param {{playlist: string[]}} state
 * @param {number} id
 */
const removeMovie = (state, idMovie) => state.filter((e) => e.id !== idMovie);

/**
 * @param {{playlist: string[]}} state
 * @param {{type: string, payload: { id: number, title: string, overview: string }}} action
 */
export const playlist = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIE:
      if (notRepeat(state.playlist, action.payload.id) < 0) {
        return {
          ...state,
          playlist: state.playlist.concat(action.payload),
        };
      }
      return {
        ...state,
      };

    case REMOVE_MOVIE:
      return {
        ...state,
        playlist: removeMovie(state.playlist, action.payload.id),
      };

    case CLEAR_PLAYLIST:
      return {
        ...state,
        playlist: [],
      };
    default:
      return state;
  }
};
