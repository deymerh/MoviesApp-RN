import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'a724f2ea4c6c46898861f4ea2bdf664c',
    language: 'es-ES',
    page: '1'
  }
})
export default movieDB;