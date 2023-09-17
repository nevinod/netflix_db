//@ts-nocheck
import { BAD_REQUEST, DEFAULT_TIMEOUT, currentYear } from './utils';
import moviesData from './condensed.json';
const movies = moviesData['_default']

interface MovieYearProps {
    minYear: number;
    maxYear?: number;
    success: boolean;
}

export default function getMoviesByYear ({
    minYear, maxYear, success = true
}: MovieYearProps) {
    let endYear = maxYear || currentYear();

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(success) {
            try {
                const response = movies.filter(movie => movie.year <= endYear && movie.year >= minYear)
                response.sort((a, b) => b.year - a.year)
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