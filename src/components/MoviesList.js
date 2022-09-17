import { Movie } from './Movie';

export function MoviesList({ movies }) {
  return (
    <div className="container">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movieId={movie.id}
          movieTitle={movie.title}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}
