import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { addMovie, removeMovie } from '../store/actions/playlist.action';

export function Movie({ movieId, movieTitle, overview }) {
  const dispatcher = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="movie">
      <h3 className="title">
        <Link to={`/movie/${movieId}`}>{movieTitle}</Link>
      </h3>
      {pathname !== "/playlist" ? (
        <button
          className="btn"
          onClick={() =>
            dispatcher(addMovie({ id: movieId, title: movieTitle, overview }))
          }
        >
          adicionar
        </button>
      ) : (
        <button
          className="btn"
          onClick={() => dispatcher(removeMovie({ id: movieId }))}
        >
          remover
        </button>
      )}
      <p className="movie-overview">{overview}</p>
      <hr />
    </div>
  );
}
