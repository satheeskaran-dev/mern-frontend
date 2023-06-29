import { Box, BoxProps, styled } from "@mui/material";

const FlexBox = styled((props: BoxProps) => (
  <Box display="flex" alignItems="center" {...props} />
))({});

export default FlexBox;
