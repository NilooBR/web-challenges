import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
