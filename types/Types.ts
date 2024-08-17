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
