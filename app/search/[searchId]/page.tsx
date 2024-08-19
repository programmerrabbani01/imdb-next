import Results from "@/components/Results/Results.tsx";
import { SearchProps } from "@/types/Types.ts";

export default async function SearchPage({ params }: SearchProps) {
  const searchId = params.searchId;

  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchId}&language=en-US&page=1&include_adult=false`
  );

  const data = await response.json();
  const results = data.results;

  return (
    <>
      {results && results.length === 0 ? (
        <div className="text-center text-xl font-medium pt-6">
          No results found.
        </div>
      ) : (
        <Results result={results} />
      )}
    </>
  );
}
