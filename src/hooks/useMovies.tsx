import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Movie, MovieDBResponse } from '../interfaces/movieDB.interface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRtaed: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRtaed: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlaying = movieDB.get<MovieDBResponse>('/now_playing');
    const popular = movieDB.get<MovieDBResponse>('/popular');
    const topRtaed = movieDB.get<MovieDBResponse>('/top_rated');
    const upcoming = movieDB.get<MovieDBResponse>('/upcoming');

    const response = await Promise.all([nowPlaying, popular, topRtaed, upcoming]);

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRtaed: response[2].data.results,
      upcoming: response[3].data.results,
    })
    setIsLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, [])
  return {
    isLoading,
    ...moviesState
  }
}
