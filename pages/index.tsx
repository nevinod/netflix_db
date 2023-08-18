import { useState } from "react";
import MainLayout from "@/components/mainLayout";
import { DemoMovieCard } from "@/components/DemoMovieCard";
import getMoviesByRating from "@/api/getMoviesByRating";
import { Divider } from "@chakra-ui/react";

export default function Home() {
  const [movies, setMovies] = useState([])

  getMoviesByRating({ minRating: 8.5 }).then((data: any) => setMovies(data))

  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {movies.length ? <div>Complete</div> : <div>Loading...</div>}

        <hr style={{marginBottom: "20px"}} />

        {movies.map((movie: any) => {
          return (
            <div>
              <DemoMovieCard movie={movie} key={movie.movie_name} />
              <Divider mt={4}/>
            </div>
            
          )
        })}
      </main>
    </MainLayout>
  )
}
