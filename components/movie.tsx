"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";

import { MovieProps } from "../types/props/movie";
import { useRouter } from "next/navigation";

export default function Movie({ id, title, poster_path }: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img onClick={onClick} src={poster_path} alt={title} />
      <Link prefetch href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
