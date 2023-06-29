import { Box, Typography } from "@mui/material";

interface Props {
  desc: string;
  navigatePage: string;
  handleClick?: () => void;
}

const CustomLink: React.FC<Props> = ({ desc, navigatePage, handleClick }) => {
  return (
    <Box
      fontSize="12px"
      color="text.secondary"
      mt={24}
      display="flex"
      justifyContent="center"
      gap={3}
      mx="auto"
      width="100%"
    >
      {desc}
      <Typography
        fontSize="12px"
        color="text.primary"
        fontWeight="600"
        sx={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        {navigatePage}
      </Typography>
    </Box>
  );
};

export default CustomLink;
