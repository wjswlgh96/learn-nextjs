import { MovieType } from "../types/data/movie";
import { MovieVideoType } from "../types/data/movieVideo";
import { API_URL } from "./apiUrls";

export async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export async function getMovie(id: string) {
  const response: MovieType = await fetch(`${API_URL}/${id}`).then((res) =>
    res.json()
  );
  return response;
}

export async function getVideos(id: string) {
  const response: MovieVideoType[] = await fetch(
    `${API_URL}/${id}/videos`
  ).then((res) => res.json());
  return response;
}
