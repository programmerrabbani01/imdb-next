import Results from "@/components/Results/Results.tsx";
import { HomeProps } from "@/types/Types.ts";

const apiKey = process.env.API_KEY;

export default async function Home({ searchParams }: HomeProps) {
  const genre = searchParams.genre || "fetchTrending";
  const response = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTrending" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${apiKey}&language=en-US&page=1`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const result = data.results;



  return <>
  
  <Results result={result}/>
  
  </>;
}
