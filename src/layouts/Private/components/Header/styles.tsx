import {
  styled,
  Box,
  BoxProps,
  DividerProps,
  Divider,
  MenuItem,
  Typography,
  MenuItemProps,
} from "@mui/material";
import { ReactNode } from "react";
import FlexBox from "../../../../components/core/FlexBox";

export const SearchFieldWrapper = styled((props: BoxProps) => (
  <Box
    display={{ xs: "none", md: "block" }}
    maxWidth={500}
    width="100%"
    mx="auto"
    {...props}
  />
))({});

export const VerticalDivider = styled((props: DividerProps) => (
  <Divider orientation="vertical" variant="middle" {...props} />
))(({ theme }) => ({ backgroundColor: theme.palette.text.primary }));

export const MenuButton = styled(
  ({
    icon,
    name,
    color,
    ...props
  }: { icon: ReactNode; name: string; color?: string } & MenuItemProps) => (
    <MenuItem sx={{ minHeight: 36 }} {...props}>
      <FlexBox gap={10}>
        {icon}
        <Typography variant="body1" color={color ?? "text.primary"}>
          {name}
        </Typography>
      </FlexBox>
    </MenuItem>
  )
)({});
