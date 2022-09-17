import { useDispatch, useSelector } from 'react-redux';

import { MoviesList } from '../components/MoviesList';
import { clearPLaylist } from '../store/actions/playlist.action';

export function Playlist() {
  const playlist = useSelector((state) => state.playlist).playlist;
  const dispatcher = useDispatch();

  return (
    <div className="App">
      {playlist.length ? (
        <>
          <button className="btn" onClick={() => dispatcher(clearPLaylist())}>
            Limpar playlist
          </button>
          <MoviesList movies={playlist} />
        </>
      ) : (
        <p> Playlist vazia! </p>
      )}
    </div>
  );
}
