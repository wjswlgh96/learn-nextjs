import { API_URL } from "./apiUrls";

export async function getMovies() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export async function getMovie(id: string) {
  await new Promise((result) => setTimeout(result, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export async function getVideos(id: string) {
  await new Promise((result) => setTimeout(result, 3000));
  //throw new Error("무언가가 잘못되었습니다.");
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
