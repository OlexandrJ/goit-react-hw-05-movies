import React, { useState } from 'react';

const SearchForm = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(query);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={query} onChange={handleInputChange} />
      <button type="submit">Пошук</button>
    </form>
  );
};

export default SearchForm;