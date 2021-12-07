import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { Cast, CreditsResponse } from '../interfaces/credits.interface';
import { MovieFull } from '../interfaces/movieFull.interface';

interface MovieDetails {
  isLoading: boolean;
  moviFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    moviFull: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(`${movieId}/credits`);

    const [movieDetailsResponse, castPromiseResponse] = await Promise.all([movieDetailsPromise, castPromise]);

    setState({
      isLoading: false,
      moviFull: movieDetailsResponse.data,
      cast: castPromiseResponse.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails();
  }, [])

  return {
    ...state
  }
}
