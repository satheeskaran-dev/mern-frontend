import { Box, BoxProps, Typography, useTheme } from "@mui/material";
import FlexBox from "../../../../components/core/FlexBox";
import { ReactNode } from "react";

const ThemeCard = ({
  icon,
  name,
  selected,
  ...props
}: {
  icon: ReactNode;
  name: string;
  selected?: boolean;
} & BoxProps) => {
  const { palette } = useTheme();
  return (
    <FlexBox flexDirection="column" sx={{ cursor: "pointer" }} {...props}>
      <Box
        borderRadius="10px"
        border={`2px solid ${
          selected ? palette.primary.main : palette.background.paper
        }`}
      >
        {icon}
      </Box>

      <Typography align="center" variant="body1" mt={10} fontWeight={500}>
        {name}
      </Typography>
    </FlexBox>
  );
};

export default ThemeCard;
