import { getMovie } from "../api/movie";
import { MovieType } from "../types/data/movie";

import styles from "../styles/movieInfo.module.css";

export default async function MovieInfo({ id }: { id: string }) {
  const movie: MovieType = await getMovie(id);
  const { title, poster_path, vote_average, overview, homepage } = movie;

  return (
    <div className={styles.container}>
      <img className={styles.poster} src={poster_path} alt={title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <h3>⭐ {vote_average.toFixed(1)}</h3>
        <p>{overview}</p>
        <a href={homepage} target="_blank">
          HomePage &rarr;
        </a>
      </div>
    </div>
  );
}
