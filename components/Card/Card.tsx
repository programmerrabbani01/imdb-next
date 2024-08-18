import { CardProps } from "@/types/Types.ts";
import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ results }: CardProps) {
  return (
    <>
      <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
        <Link href={`/movie/${results.id}`}>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              results.backdrop_path || results.poster_path
            }`}
            alt={results.title}
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-300"
          />
        </Link>
        <div className="p-2">
          <h3 className="text-lg font-bold group-hover:text-amber-500 transition-color duration-300 truncate mb-2">
            {results.title}
          </h3>
          <p className="line-clamp-2 text-md mb-2">{results.overview}</p>
          <p className="flex items-center">
            {results.release_date || results.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {results.vote_count}
          </p>
        </div>
      </div>
    </>
  );
}
