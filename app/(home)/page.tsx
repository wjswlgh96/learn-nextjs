import { Metadata } from "next";

import { getMovies } from "../../api/movie";
import { MovieType } from "../../types/data/movie";

import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata: Metadata = {
  title: "Home",
};

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
