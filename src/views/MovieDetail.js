import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { MoviesService } from '../services/MoviesService';

export default function MovieDetail() {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    MoviesService.getById(movieId).then(({ data }) => {
      console.log(data);
      setMovie(data);
    });
  }, [movieId]);

  return (
    <section>
      <h1>{movie.title}</h1>

      <section>
        <p>{movie.overview}</p>
      </section>
    </section>
  );
}
