import {
  Box,
  IconButton,
  Snackbar as MuiSnackbar,
  Paper,
  Slide,
  SlideProps,
  SnackbarProps,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBox from "./FlexBox";
import { ReactComponent as SuccessIcon } from "../../assets/icons/success-circle.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";

function Transition(props: SlideProps) {
  return <Slide {...props} direction="left" />;
}

const Snackbar = ({
  open,
  msg,
  title,
  handleClose,
  ...props
}: {
  open: boolean;
  msg?: string;
  title: string;
  handleClose: () => void;
} & SnackbarProps) => {
  const { palette } = useTheme();
  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      autoHideDuration={5000}
      {...props}
    >
      <Paper
        sx={{
          position: "relative",
          maxWidth: 400,
          width: "100%",
          py: 16,
          px: 26,
          border: `1px solid ${palette.text.secondary}50`,
          borderRadius: "10px",
        }}
      >
        <FlexBox gap={12}>
          <Box>
            <SuccessIcon />
          </Box>
          <Typography fontSize="16px" fontWeight={700}>
            {title}
          </Typography>
        </FlexBox>
        <Typography variant="caption">{msg}</Typography>
        <IconButton
          sx={{ position: "absolute", top: 5, right: 5 }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </Paper>
    </MuiSnackbar>
  );
};

export default Snackbar;
