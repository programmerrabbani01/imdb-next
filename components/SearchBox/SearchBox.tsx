"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  // handle input change

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  // handle form submit
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <>
      <form
        className="flex justify-between px-5 max-w-6xl mx-auto"
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          placeholder="Search Keyword ....."
          className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1"
          value={search}
          onChange={handleInputChange}
        />
        <button
          className="text-amber-500 disabled:text-gray-400"
          disabled={!search}
        >
          Search
        </button>
      </form>
    </>
  );
}
