import axios from 'axios';

export const apiKey = '2?api_key=6349ef152b2b036907f5c0ffb89997c2';
export const apiUrlImg = 'https://image.tmdb.org/t/p/w500';
export const language = 'language=pt-BR';

  export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/" 
  });