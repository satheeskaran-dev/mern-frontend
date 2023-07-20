import { ReactNode, useState } from "react";
import {
  BoxProps,
  Popover as MuiPopover,
  PaperProps,
  PopoverProps,
  useTheme,
} from "@mui/material";

type CustomProps = {
  children: ReactNode;
  paperSx?: Pick<PaperProps, "sx">;
  arrowBoxProps?: BoxProps;
};

type PopoverHookReturnType = [
  Popover: React.FC<CustomProps & Omit<PopoverProps, "open">>,
  setAnchorEl: React.Dispatch<
    React.SetStateAction<Element | (() => Element) | null>
  >
];

const usePopover = (): PopoverHookReturnType => {
  const [anchorEl, setAnchorEl] = useState<Element | (() => Element) | null>(
    null
  );

  const { palette } = useTheme();

  const Popover: React.FC<CustomProps & Omit<PopoverProps, "open">> = ({
    children,
    slotProps,
    paperSx,
    arrowBoxProps,
    ...props
  }) => (
    <MuiPopover
      {...props}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      slotProps={{
        paper: {
          sx: {
            mt: 10,
            p: 14,
            width: 150,
            position: "relative",
            border: `1px solid ${palette.text.secondary}40`,
            ...paperSx?.sx,
          },
        },
      }}
    >
      {children}
    </MuiPopover>
  );

  return [Popover, setAnchorEl];
};

export default usePopover;
