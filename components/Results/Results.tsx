import React from "react";

export default function Results({ result }: any) {
  return (
    <>
      {result.map((results: any) => (
        <div key={results.id}>
          <h2>{results.title}</h2>
        </div>
      ))}
    </>
  );
}
