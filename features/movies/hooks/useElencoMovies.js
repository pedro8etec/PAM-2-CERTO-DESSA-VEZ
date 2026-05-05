import { use, useEffect, useState } from 'react';
import { getElencoMovie } from '../services/movieService';

export const useElencoMovies = (movieId) => {
  const [elenco, setElenco] = useState([]);

  useEffect(() => {
    (async () => {
        const data = await getElencoMovie(movieId);
        setElenco(data);
    })();
  }, []);

  return {  elenco };
};