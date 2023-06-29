import { ReactNode } from "react";
import { styled, Box, BoxProps, Typography } from "@mui/material";

type MenuItemButtonPropsType = {
  icon: ReactNode;
  name: string;
  isActive?: boolean;
  error?: boolean;
};

const Indicator = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "5px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px 0 0 8px",
  position: "absolute",
  right: 0,
}));

export const MenuItemButton = ({
  icon,
  name,
  isActive,
  error,
  ...boxProps
}: MenuItemButtonPropsType & BoxProps) => (
  <Box
    position="relative"
    width="100%"
    height="30px"
    display="flex"
    alignItems="center"
    gap={11}
    pl={32}
    mb={15}
    sx={{
      cursor: "pointer",
    }}
    {...boxProps}
  >
    {icon}
    <Typography
      variant="body1"
      color={
        error
          ? (theme) => theme.palette.error.main
          : isActive
          ? "primary"
          : "#5F6368"
      }
    >
      {name}
    </Typography>
    <Indicator display={isActive ? "block" : "none"} />
  </Box>
);
