import { Alert } from "@mui/material";

const BackendError = ({ errorMsg }: { errorMsg: string | null }) => {
  return (
    <Alert
      severity="error"
      variant="filled"
      sx={{
        display: Boolean(errorMsg) ? "flex" : "none",
        py: 0,
        my: 10,
        fontSize: "12.5px",
      }}
    >
      {errorMsg}
    </Alert>
  );
};

export default BackendError;
