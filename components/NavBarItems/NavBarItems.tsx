"use client"

import { NavBarProps } from "@/types/Types.ts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

export default function NavBarItems({ title, param }: NavBarProps) {

  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link className={`hover:text-amber-600 font-semibold ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded":""}`} href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  );
}
