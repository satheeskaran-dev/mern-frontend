import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import TextField from "../../../../components/mui/TextField";
import { UrlSlugType } from "../../../../utils/enums/UrlSlug.enum";
import BackendError from "../../../../components/core/BackendError";

interface Props {}

const ForgotPasswordForm: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <form>
      <Typography mb={18} fontSize="26px" fontWeight="600" align="center">
        Forgot Password?
      </Typography>
      <Typography mb={30} variant="body1" color="text.secondary" align="center">
        Enter your registered email below to receive password reset code
      </Typography>
      <TextField placeholder="Email" />
      <BackendError errorMsg={null} />
      <LoadingButton fullWidth variant="contained" type="submit">
        Send Link
      </LoadingButton>

      <Typography
        mt={18}
        fontSize="14px"
        color="text.primary"
        fontWeight="600"
        align="center"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(UrlSlugType.LOGIN)}
      >
        Back to login
      </Typography>
    </form>
  );
};

export default ForgotPasswordForm;
