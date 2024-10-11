import { Suspense } from "react";

import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Skeleton } from "@mui/material";
import { MovieDetailProps } from "../../../../types/props/movieDetail";
import { getMovie } from "../../../../api/movie";
import { MovieType } from "../../../../types/data/movie";

export async function generateMetadata({ params: { id } }: MovieDetailProps) {
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail({
  params: { id },
}: MovieDetailProps) {
  return (
    <div>
      <Suspense
        fallback={
          <Skeleton
            sx={{ bgcolor: "grey.900", width: "100%", height: "30vh" }}
            animation="wave"
            variant="rounded"
          />
        }
      >
        <MovieInfo id={id} />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            sx={{ width: "100%", height: "30vh", bgcolor: "grey.900", mt: 3 }}
            animation="wave"
            variant="rounded"
          />
        }
      >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
