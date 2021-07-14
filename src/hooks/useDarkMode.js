import { useState, useEffect } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useLocalStorage from "./useLocalStorage";

/**
 * hook that manage the theme
 * @returns  {Array<string,Function} [String,SetterFunction]
 */
const useDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme");
  const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");
  const isLightModeEnabled = useMediaQuery("(prefers-color-scheme: light)");
  // for this conditional statement refer this
  // https://github.com/mui-org/material-ui/issues/15588
  // it done boz useMediaQuery do not return correct theme on first rebder
  if (!theme && !isDarkModeEnabled === isLightModeEnabled) {
    if (isDarkModeEnabled) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  useEffect(() => {
    if (theme === "dark") document.documentElement.dataset.theme = "dark";
    else document.documentElement.dataset.theme = "light";
  }, [theme]);

  return [theme, setTheme];
};

export default useDarkMode;
