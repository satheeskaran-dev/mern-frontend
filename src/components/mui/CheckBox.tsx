import {
  FormControlLabel,
  Checkbox,
  CheckboxProps,
  TypographyProps,
  SxProps,
} from "@mui/material";

export type CheckBoxCustomProps = {
  label?: string;
  checkBoxColor?: string;
  typographyProps?: TypographyProps;
  formControlSx?: SxProps;
};

const CheckBox: React.FC<CheckBoxCustomProps & CheckboxProps> = ({
  label,
  checkBoxColor,
  typographyProps,
  formControlSx,
  ...props
}) => {
  return (
    <FormControlLabel
      sx={{ height: 22, ...formControlSx }}
      control={
        <Checkbox
          sx={{
            "& .MuiSvgIcon-root": { fontSize: 16 },
            color: `${checkBoxColor ?? "text.primary"}`,
            "&.Mui-checked": {
              color: `${checkBoxColor ?? "text.primary"}`,
            },
          }}
          {...props}
        />
      }
      componentsProps={{
        typography: {
          fontSize: "12px",
          color: "text.secondary",
          ...typographyProps,
        },
      }}
      label={label}
    />
  );
};

export default CheckBox;
