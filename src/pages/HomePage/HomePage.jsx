import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/tmdb-api';
import { MovieList } from '../../components/MovieList/MovieList';
import css from './HomePage.module.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

