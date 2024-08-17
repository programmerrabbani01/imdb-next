import { NavBarProps } from "@/types/Types.ts";
import NavBarItems from "../NavBarItems/NavBarItems.tsx";

export default function NavBar({ title, param }: NavBarProps) {
  return (
    <>
      <div className="flex justify-center dark:bg-gray-600 bg-amber-100 p-4 gap-8">
        <NavBarItems title="Trending" param="fetchTrending" />
        <NavBarItems title="Top Rated" param="fetchTopRated" />
      </div>
    </>
  );
}
