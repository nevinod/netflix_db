//@ts-nocheck
import { BAD_REQUEST, DEFAULT_TIMEOUT } from './utils'
import moviesData from './records.json';
const movies = moviesData['_default']

interface MovieIdProps {
  id: string;
  success?: boolean;
}

export default function getMovieById ({
  id,
  success = true,
}: MovieIdProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(success) {
            try {
              resolve(movies[id]);
            } catch {
              reject({status: BAD_REQUEST, message: `Index ${id} not found in data`});
            }
          } else {
            reject({status: BAD_REQUEST, message: 'Error in fetching data'});
          }
        }, DEFAULT_TIMEOUT);
    });
}