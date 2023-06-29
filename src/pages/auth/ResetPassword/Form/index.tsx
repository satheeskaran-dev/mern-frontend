import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import TextField from "../../../../components/mui/TextField";
import { UrlSlugType } from "../../../../utils/enums/UrlSlug.enum";
import BackendError from "../../../../components/core/BackendError";

interface Props {}

const ResetPasswordForm: React.FC<Props> = (props) => {
  const navigate = useNavigate();
  return (
    <form>
      <Typography mb={18} fontSize="26px" fontWeight="600" align="center">
        Create New Password
      </Typography>
      <Typography mb={30} variant="body1" color="text.secondary" align="center">
        To Create your new password, Please fill in the fields below
      </Typography>
      <TextField placeholder="New Password" />
      <TextField placeholder="Retype Password" />
      <BackendError errorMsg={null} />
      <LoadingButton fullWidth variant="contained" type="submit">
        Create Password
      </LoadingButton>
      <LoadingButton
        onClick={() => navigate(UrlSlugType.LOGIN)}
        fullWidth
        variant="text"
        sx={{ color: "text.primary" }}
        disableRipple
      >
        Cancel
      </LoadingButton>
    </form>
  );
};

export default ResetPasswordForm;
