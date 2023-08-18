import { useState } from "react";
import MainLayout from "@/components/mainLayout";
import getMovieById from "@/api/getMovieById";

export default function Home() {
  const [movie, setMovie] = useState(null)

  getMovieById({ id: "100" }).then((data: any) => setMovie(data))

  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {movie ? <div>Complete</div> : <div>Loading...</div>}

        <hr style={{marginBottom: "20px"}} />

        {movie && <code>{JSON.stringify(movie, null, 4)}</code>}
      </main>
    </MainLayout>
  )
}
