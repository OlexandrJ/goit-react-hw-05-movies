import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await getTrendingMovies();
        setTrendingMovies(response.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleSubmit = (value) => {
  };

  return (
    <div>
      <h2>Найпопулярніші фільми</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <SearchForm handleSubmit={handleSubmit} />
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;