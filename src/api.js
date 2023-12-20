const apiKey = '82e54d6346add158b3ca2c4553f01f90';
const apiUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await fetch(`${apiUrl}/trending/all/day?api_key=${apiKey}`);
  const data = await response.json();
  return data;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`
  );
  const data = await response.json();
  return data;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};

export const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}/credits?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};

export const getMovieReviews = async (movieId) => {
  const response = await fetch(
    `${apiUrl}/movie/${movieId}/reviews?api_key=${apiKey}`
  );
  const data = await response.json();
  return data;
};