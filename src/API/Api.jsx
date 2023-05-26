import axios from 'axios';

const KEY = `731f4a410992078035fa504a629d03c1`;
const URL = `https://api.themoviedb.org/3`;

export const getFilmsList = async (page = 1) => {
  let request = `${URL}/trending/all/day?api_key=${KEY}&page=${page}&language=en-US`;

  try {
    const response = await axios.get(request);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMoviesDetails = async id => {
  let request = `${URL}/movie/${id}?api_key=${KEY}&language=en-US`;

  try {
    const response = await axios.get(request);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMoviesCast = async id => {
  let request = `${URL}/movie/${id}/credits?api_key=${KEY}&language=en-US`;

  try {
    const response = await axios.get(request);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMoviesReviews = async id => {
  let request = `${URL}/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;

  try {
    const response = await axios.get(request);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getMoviesName = async query => {
  let request = `${URL}/search/movie?api_key=${KEY}&query=${query}&include_adult=false&language=en-US&page=1`;

  try {
    const response = await axios.get(request);
    return response;
  } catch (error) {
    console.error(error);
  }
};
