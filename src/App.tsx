import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useSelector } from "react-redux";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  ThemeWithProps,
} from "@mui/material";
import { themeSettings } from "./config/theme";
import { useEffect, useMemo, useState } from "react";
import { Mode } from "./store/slices/theme.slice";

function App() {
  const [systemTheme, setSystemTheme] = useState<boolean>(false);
  const mode: Mode = useSelector((state: any) => state.theme.mode);
  const token = useSelector((state: any) => state.auth.token);

  const theme = useMemo(
    () =>
      createTheme(
        themeSettings(
          mode === "system" ? (systemTheme === true ? "dark" : "light") : mode
        ) as ThemeWithProps
      ),

    [mode, systemTheme]
  );

  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setSystemTheme(systemPrefersDark);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {token ? <PrivateRoutes /> : <PublicRoutes />}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
