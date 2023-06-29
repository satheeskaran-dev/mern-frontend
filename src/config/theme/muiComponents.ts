const muiComponents: any = {
  MuiCssBaseline: {
    styleOverrides: {
      ":root": {
        "*::-webkit-scrollbar": {
          width: "8px",
        },
        "*::-webkit-scrollbar-track-piece:start": {
          background: "transparent",
          marginTop: "10px",
        },
        "*::-webkit-scrollbar-track-piece:end": {
          background: "transparent",
          marginBottom: "10px",
        },
        "*::-webkit-scrollbar-thumb": {
          // backgroundColor: "#dfdfe6",
          borderRadius: "4px",
          cursor: "pointer",
        },
        "*::-webkit-scrollbar-thumb:hover": {
          // backgroundColor: "#cccce9",
          borderRadius: "4px",
        },
      },
    },
  },
  MuiButton: {
    defaultProps: { disableElevation: true },
    styleOverrides: {
      root: {
        height: "46px",
        textTransform: "none",
        fontSize: "14px",
        fontWeight: "600",
      },
    },
  },
};

export default muiComponents;
