import React from "react";

export type HeaderProps = {
  title: string;
  address: string;
  Icon: React.ComponentType;
};

export type ProviderProps = {
  children: React.ReactNode;
};

export type NavBarProps = {
  title: string;
  param: "fetchTrending" | "fetchTopRated";
};

export type SearchParamsProps = {
  genre?: string;
};

export type HomeProps = {
  searchParams: SearchParamsProps;
};
export type ErrorProps = {
  error: Error;
  reset: () => void;
};

export type Result = {
  id: string;
  title: string;
  overview: string;
  backdrop_path?: string;
  poster_path?: string;
  release_date?: string;
  first_air_date?: string;
  vote_count?: string;
};

// Define the type for the props of the Results component
export type ResultProps = {
  result: Result[];
};

export type CardProps = {
  results: Result;
};

export type MovieSingleProps = {
  params: {
    id: string;
  };
};

export type SearchProps = {
  params: {
    searchId: string;
  };
};
