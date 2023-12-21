import React, { useState } from 'react';
import { searchMovies } from '../../api';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await searchMovies(searchQuery);
      setSearchResults(response.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleSubmit = (value) => {
    setSearchQuery(value);
    handleSearch();
  };

  return (
    <div>
      <h2>Пошук фільмів</h2>
      <SearchForm handleSubmit={handleSubmit} />
      <MoviesList movies={searchResults} />
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Пошук</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;