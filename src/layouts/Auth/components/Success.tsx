import { Box, Typography, Button } from "@mui/material";
import { ReactComponent as SuccessIcon } from "../../../assets/icons/success.svg";

type AuthSuccessType = {
  title?: string;
  description?: string;
  buttonText?: string;
  handleButtonClick?: () => void;
};

const AuthSuccess = ({
  title = "Password Successfully reset!",
  description = "You can now use your new password to Login to your account!",
  buttonText = "Login",
  handleButtonClick = () => null,
}: AuthSuccessType) => (
  <Box width="100%" display="flex" flexDirection="column" alignItems="center">
    <Box>
      <SuccessIcon />
    </Box>
    <Typography mb={18} mt={28} fontSize="26px" fontWeight="600" align="center">
      {title}
    </Typography>
    <Typography mb={30} variant="body1" color="text.secondary" align="center">
      {description}
    </Typography>
    <Button fullWidth variant="contained" onClick={handleButtonClick}>
      {buttonText}
    </Button>
  </Box>
);

export default AuthSuccess;
