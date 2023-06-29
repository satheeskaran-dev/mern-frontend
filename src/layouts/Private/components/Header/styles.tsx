import { styled, Box, BoxProps, DividerProps, Divider } from "@mui/material";

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
