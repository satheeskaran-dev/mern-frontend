import { TextField, InputAdornment, TextFieldProps } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchField = ({ sx, ...props }: TextFieldProps) => {
  return (
    <TextField
      type="search"
      fullWidth
      placeholder="Explore Here"
      sx={{
        ...sx,
        ".MuiOutlinedInput-root": {
          backgroundColor: "background.default",
          borderRadius: 16,
          fieldset: {
            border: `none`,
          },
        },
        input: { height: "16px", padding: "10px 14px " },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export default SearchField;
