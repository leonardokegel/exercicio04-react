import { useEffect, useState } from 'react';

import { MoviesList } from '../components/MoviesList';
import { MoviesService } from '../services/MoviesService';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    MoviesService.getPopularMovies().then(({ data: { results } }) => {
      setMovies(results);
    });
  }, []);

  return (
    <div className="App">
      <MoviesList movies={movies} />
    </div>
  );
}
