import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../api';
import MoviesList from './MoviesList';
import SearchForm from './SearchForm';

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
      <SearchForm handleSubmit={handleSubmit} />
      <MoviesList movies={trendingMovies} />
    </div>
  );
};

export default Home;