import {
  Box,
  Divider,
  Paper,
  PaperProps,
  Typography,
  TypographyProps,
  styled,
  useTheme,
} from "@mui/material";
import { ReactNode } from "react";

export const Heading = styled((props: TypographyProps) => (
  <Typography variant="subtitle1" mb={10} {...props} />
))({});

export const ContainerWithTitle: React.FC<
  { children: ReactNode; title: string } & PaperProps
> = ({ title, children, ...props }) => {
  const { palette } = useTheme();
  return (
    <Paper
      sx={{
        border: `1px solid ${palette.text.secondary}40`,
        mt: 30,
      }}
      {...props}
    >
      <Typography
        fontSize="24px"
        lineHeight="33px"
        py={15}
        fontWeight={600}
        px={{ xs: 15, md: 50 }}
      >
        {title}
      </Typography>
      <Divider />
      <Box px={{ xs: 15, md: 50 }} py={30}>
        {children}
      </Box>
    </Paper>
  );
};
