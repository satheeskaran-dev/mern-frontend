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
import { useMemo } from "react";

function App() {
  const mode = useSelector((state: any) => state.theme.mode);
  const theme = useMemo(
    () => createTheme(themeSettings(mode) as ThemeWithProps),

    [mode]
  );
  const token = useSelector((state: any) => state?.auth?.token);

  // test comment

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
