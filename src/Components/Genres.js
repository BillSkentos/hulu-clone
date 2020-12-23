
const key = process.env.REACT_APP_API_KEY;

const genreLinks = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${key}`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  fetchAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  fetchMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
  fetchScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
  fetchWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
  fetchAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
  fetchTvMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10770`,
};

export default genreLinks;
