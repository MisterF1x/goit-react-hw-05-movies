import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const AUTH_KEY = '28027c59bdca8e7ee28a28ecaf4d25ca';

export const fetchTodayTrendMovies = async page => {
  const options = {
    params: {
      api_key: AUTH_KEY,
      page,
    },
  };
  const { data } = await axios('/trending/movie/day', options);
  return data;
};
export const fetchMovieById = async id => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };
  const { data } = await axios(`/movie/${id}`, options);
  return data;
};
export const fetchMovieReviewById = async id => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };
  const { data } = await axios(`/movie/${id}/reviews`, options);
  return data;
};
export const fetchMovieCast = async id => {
  const options = {
    params: {
      api_key: AUTH_KEY,
    },
  };
  const { data } = await axios(`/movie/${id}/credits`, options);
  return data;
};
export const fetchMovieByQuery = async query => {
  const options = {
    params: {
      api_key: AUTH_KEY,
      query,
    },
  };
  const { data } = await axios(`/search/movie`, options);
  return data;
};
