import { ReactNode, CSSProperties } from "react";
import { Paper, PaperProps } from "@mui/material";

const Container = ({ children, sx, ...paperProps }: { children: ReactNode; sx?: CSSProperties } & PaperProps) => {
  return (
    <Paper
      sx={{
        maxWidth: "380px",

        width: "100%",
        m: "auto",
        px: { xs: "16px", md: "32px" },
        py: { xs: "24px", md: "32px" },
        ...sx,
      }}
      {...paperProps}
    >
      {children}
    </Paper>
  );
};

export default Container;
