import { HeaderProps } from "@/types/Types.ts";
import Link from "next/link";
import React from "react";

export default function MenuItem({ title, address, Icon }: HeaderProps) {
  return (
    <>
      <Link href={address} className="hover:text-amber-500 transition">
        <div className="icon text-2xl sm:hidden">
          <Icon />
        </div>

        <p className="hidden sm:inline text-start">{title}</p>
      </Link>
    </>
  );
}
