import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmY0OTZkZGM4NzljYTM5NTFkYTQ3NWY5M2I5YTJlZSIsIm5iZiI6MTc0NTA0Njg2My4yMTksInN1YiI6IjY4MDM0ZDRmMzkxYjkyNzAxOWQ5MThhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NTYBL9ndFBRSUtB7rvKEnd6MVvEam_NE4K8mpl0283Y';

const options = {
  headers: {
    Authorization: ACCESS_TOKEN,
  },
};

export async function getTrendingMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data;
}

export async function searchMovies(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1&include_adult=false`,
    options
  );
  return response.data;
}


export async function getMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}?language=en-US`, options);
  return response.data;
}


export async function getMovieCast(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return response.data;
}

export async function getMovieReviews(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return response.data;
}
