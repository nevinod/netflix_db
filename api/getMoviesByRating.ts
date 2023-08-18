//@ts-nocheck
import { BAD_REQUEST, DEFAULT_TIMEOUT } from './utils';
import moviesData from './records.json';
const movies = moviesData['_default']

interface MovieRatingProps {
    minRating: number;
    success: boolean;
}

export default function fetchMoviesByRating ({
    minRating,
    success = true,
}: MovieRatingProps) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(success) {
            try {
                const response = [];
                for(let key in movies) {
                    if(movies[key].rating >= minRating) {
                        response.push(movies[key])
                    }
                }
                response.sort((a, b) => b.rating - a.rating)
                resolve(response);
            } catch {
                reject({status: BAD_REQUEST, message: `Index ${id} not found in data`});
            }
          } else {
                reject({status: BAD_REQUEST, message: 'Error in fetching data'});
          }
        }, DEFAULT_TIMEOUT);
    });
}