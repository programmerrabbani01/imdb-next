"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-white hover:text-amber-500 transition cursor-pointer text-xl"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-gray-800 hover:text-amber-500  transition cursor-pointer text-xl"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
