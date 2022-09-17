import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Header() {
  const numberOfMoviesInPlaylist = useSelector(
    (state) => state.playlist
  ).playlist;

  return (
    <header>
      <h1>Listagem de filmes</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
            <small> {numberOfMoviesInPlaylist.length} </small>
          </li>
        </ul>
      </nav>
    </header>
  );
}
