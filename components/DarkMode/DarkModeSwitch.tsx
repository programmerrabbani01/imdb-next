"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure that we are on the client side before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted, return null to prevent rendering
  if (!mounted) return null;

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
          className="text-gray-800 hover:text-amber-500 transition cursor-pointer text-xl"
          onClick={() => setTheme("dark")}
        />
      )}
    </>
  );
}
