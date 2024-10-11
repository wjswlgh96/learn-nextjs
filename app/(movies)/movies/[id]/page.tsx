import { PageProps } from "../../../../.next/types/app/layout";

export default function MovieDetail(props: PageProps) {
  const { params, searchParams } = props;

  return <h1>Movie {params.id}</h1>;
}
