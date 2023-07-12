import { Alert } from "@mui/material";

const BackendError = ({ errorMsg }: { errorMsg: string | null }) => {
  return (
    <Alert
      severity="error"
      color="error"
      // variant="outlined"
      sx={{
        display: Boolean(errorMsg) ? "flex" : "none",
        py: 0,
        my: 10,
        fontSize: "12.5px",
        color: "red",
      }}
    >
      {errorMsg}
    </Alert>
  );
};

export default BackendError;
