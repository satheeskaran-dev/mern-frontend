import { useDispatch, useSelector } from "react-redux";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  ThemeWithProps,
} from "@mui/material";
import { themeSettings } from "./config/theme";
import { useEffect, useMemo } from "react";
import { setSystemDark, themeSelector } from "./store/slices/theme.slice";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();

  const { mode, systemDark } = useSelector(themeSelector);

  const theme = useMemo(
    () =>
      createTheme(
        themeSettings(
          mode === "system" ? (systemDark ? "dark" : "light") : mode
        ) as ThemeWithProps
      ),

    [mode, systemDark]
  );

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    dispatch(setSystemDark(systemPrefersDark));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeWrapper;
