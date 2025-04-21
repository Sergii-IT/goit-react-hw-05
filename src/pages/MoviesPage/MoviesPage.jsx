import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/tmdb-api';
import { MovieList } from '../../components/MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
  
    async function fetchMovies() {
      try {
        const data = await searchMovies(query);
        console.log('Fetched data:', data);
        setMovies(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  
    fetchMovies();
  }, [query]);
  

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.query.value.trim();
    if (!value) return;
    setSearchParams({ query: value });
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" placeholder="Search movies..." />
        <button type="submit">Search</button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
