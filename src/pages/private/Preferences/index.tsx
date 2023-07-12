import { Box, Typography } from "@mui/material";
import Appearance from "./Appearance";

interface Props {}

const Preferences: React.FC<Props> = (props) => {
  return (
    <Box width="100%" p={{ md: "0 30px", lg: "0 50px" }}>
      <Typography fontSize="36px" fontWeight={600}>
        Preferences
      </Typography>
      <Appearance />
    </Box>
  );
};

export default Preferences;
