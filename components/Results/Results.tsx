import React from "react";
import Card from "../Card/Card.tsx";
import { ResultProps } from "@/types/Types.ts";

export default function Results({ result }: ResultProps) {
  return (
    <>
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {result.map((results) => (
          <Card key={results.id} results={results} />
        ))}
      </div>
    </>
  );
}
