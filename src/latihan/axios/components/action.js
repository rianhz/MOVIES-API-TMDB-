import axios from 'axios';

const myurl = process.env.REACT_APP_BASEURL;
const apikey = process.env.REACT_APP_APIKEY;

export const topMoviesGet = async () => {
  const dataMovie = await axios.get(`${myurl}/movie/top_rated?api_key=${apikey}`);
  return dataMovie.data.results;
};

export const allMoviesGet = async () => {
  const dataMovie = await axios.get(`${myurl}/movie/popular?api_key=${apikey}`);
  return dataMovie.data.results;
};

export const detailMovies = async (q) => {
  const dataMovie = await axios.get(`${myurl}/movie/${q}?api_key=${apikey}`);
  return dataMovie.data;
};
export const searchMovies = async (q) => {
  const dataMovie = await axios.get(`${myurl}/search/movie?api_key=${apikey}&query=${q}`);
  return dataMovie.data.results;
};
