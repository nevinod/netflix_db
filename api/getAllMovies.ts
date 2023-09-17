import { BAD_REQUEST, DEFAULT_TIMEOUT } from './utils';
import moviesData from './condensed.json';
const movies = moviesData['_default']

interface MovieProps {
  success: boolean;
}

export default function getAllMovies({
    success = true,
}: MovieProps) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(success) {
          resolve(movies);
        } else {
          reject({status: BAD_REQUEST, message: 'Error in fetching data'});
        }
      }, DEFAULT_TIMEOUT);
    });
}