import { Shadows } from "@mui/material";
import { typography } from "./typography";
import muiComponents from "./muiComponents";

export type Mode = "dark" | "light";

export const themeSettings = (mode: Mode) => ({
  palette: {
    mode: mode,

    ...(mode === "light"
      ? {
          primary: {
            main: "#0088FF",
          },
          success: {
            main: "#42C950",
          },
          error: {
            main: "#FF3333",
          },
          info: { main: "#0088FF" },
          warning: { main: "#FF6A34", dark: "#B54708", light: "#FEC84B" },
          background: {
            paper: "#FFFFFF",
            default: "#FCFCFD",
          },
          text: { primary: "#101828", secondary: "#475467" },
        }
      : {
          primary: {
            main: "#0088FF",
          },
          success: {
            main: "#42C950",
          },
          error: {
            main: "#FF3333",
          },
          info: { main: "#0088FF" },
          warning: { main: "#FF6A34", dark: "#B54708", light: "#FEC84B" },
          background: {
            paper: "#1B1B1B",
            default: "#1A1A1A",
          },
          text: { primary: "#E0E0E0", secondary: "#A3A3A3" },
        }),
  },

  spacing: 1,
  shape: {
    borderRadius: 10,
  },

  shadows: [
    "none",
    "2.5px 12.8px 54px rgba(0, 0, 0, 0.15)",
    "0px 35px 60px rgba(0, 0, 0, 0.25)",
    "20px 55px 60px rgba(0, 0, 0, 0.25)",
    "10px 15px 60px rgba(0, 0, 0, 0.25)",
    ...Array(20).fill("none"),
  ] as Shadows,
  typography,
  mixins: { toolbar: { minHeight: 60 } },
  components: muiComponents,
});
