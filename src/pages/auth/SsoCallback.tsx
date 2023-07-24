import { Box, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const bc = new BroadcastChannel("SSO");

const SSOCallback = () => {
  const [searchParam] = useSearchParams();

  useEffect(() => {
    const jsonData = searchParam.get("data");

    if (jsonData) {
      const user = JSON.parse(decodeURIComponent(jsonData));
      bc.postMessage(user);
      window.close();
    }
  }, [searchParam]);

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default SSOCallback;
