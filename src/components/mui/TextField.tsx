import { useState, MouseEvent } from "react";
import {
  TextField as MuiTextField,
  Box,
  BoxProps,
  Typography,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";

type PropsType = {
  label?: string;
  boxProps?: BoxProps;
  password?: boolean;
};

const TextField = ({
  label,
  password,
  boxProps,
  ...textFieldProps
}: PropsType & TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();

  return (
    <Box width="100%" minHeight="95px" {...boxProps}>
      <Typography variant="body1" color="text.secondary" mb={6}>
        {label}
      </Typography>
      <MuiTextField
        fullWidth
        type={
          !password ? textFieldProps.type : showPassword ? "text" : "password"
        }
        InputProps={{
          endAdornment: password && (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOffOutlined />
                ) : (
                  <VisibilityOutlined />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          input: {
            padding: "14.4px 14px",
            fontSize: "13px",
            "&::placeholder": {
              fontSize: "13px",
              fontWeight: "400",
              color: `${theme.palette.text.primary}60`,
              opacity: "1",
            },
          },

          "& .MuiFormHelperText-root": {
            fontSize: "12px",
          },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

export default TextField;
