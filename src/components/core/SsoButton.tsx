import { Box, BoxProps, Paper, Typography } from "@mui/material";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";

const SsoAuthButton = ({
  btnText,
  ...boxProps
}: { btnText?: string } & BoxProps) => {
  return (
    <Box {...boxProps}>
      <Paper
        elevation={2}
        sx={{
          height: "47px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          cursor: "pointer",
        }}
      >
        <GoogleIcon />
        <Typography
          variant="subtitle2"
          fontFamily="Roboto"
          letterSpacing=".42px"
          color="text.secondary"
        >
          {btnText ?? "Sign in with Google"}
        </Typography>
      </Paper>
    </Box>
  );
};

export default SsoAuthButton;
