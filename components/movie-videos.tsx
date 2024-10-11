import { getVideos } from "../api/movie";

export default async function MovieVideos({ id }: { id: string }) {
  const videos: any = await getVideos(id);
  return (
    <div>
      {videos.map((video) => (
        <h6 key={video.id}>{JSON.stringify(video)}</h6>
      ))}
    </div>
  );
}
