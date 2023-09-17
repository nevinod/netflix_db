//@ts-nocheck
import { BAD_REQUEST, DEFAULT_TIMEOUT } from './utils';
import moviesData from './condensed.json';
const movies = moviesData['_default']

interface MovieRatingProps {
    minRating: number;
    limit: number;
    skip: number;
    success?: boolean;
}

export default function getMoviesByRating ({
    minRating,
    limit,
    skip = 0,
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
                response.length >= skip ? resolve(response.slice(skip, skip + limit)) : resolve([])
            } catch(e) {
                console.log(e)
                reject({status: BAD_REQUEST, message: `Error in filtering movies`});
            }
          } else {
                reject({status: BAD_REQUEST, message: 'Error in fetching data'});
          }
        }, DEFAULT_TIMEOUT);
    });
}