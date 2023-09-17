import { useState } from "react";
import MainLayout from "@/components/MainLayout";
import { DemoMovieCard } from "@/components/DemoMovieCard";
import getMoviesByRating from "@/api/getMoviesByRating";
import { Divider, Flex } from "@chakra-ui/react";
import {
  LIMIT_PER_PAGE,
  MINIMUM_RATING,
  PAGE_SKIP
} from '../constants';

export default function Home() {
  const [movies, setMovies] = useState([])

  getMoviesByRating({ 
    minRating: MINIMUM_RATING, limit: LIMIT_PER_PAGE, skip: PAGE_SKIP 
  })
    .then((data: any) => setMovies(data))
    .catch(e => alert(e.message))

  return (
    <MainLayout>
      <Flex direction="row" justify="start" >
        <hr style={{marginBottom: "20px"}} />

        <Flex direction="row" wrap="wrap" justify="flex-start" >
          {movies.map((movie: any) => {
            return (
              <div key={movie.movie_name}>
                <DemoMovieCard movie={movie} />
                <Divider mt={4}/>
              </div>
            )
          })}
        </Flex>
        
      </Flex>
    </MainLayout>
  )
}
