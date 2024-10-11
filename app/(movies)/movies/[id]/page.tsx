import { Suspense } from "react";

import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Skeleton } from "@mui/material";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense
        fallback={<Skeleton variant="rounded" width={200} height={120} />}
      >
        <MovieInfo id={id} />
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            style={{ marginTop: "30px" }}
            variant="rounded"
            width={200}
            height={120}
          />
        }
      >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
