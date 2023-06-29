import { Avatar, Box, Typography } from "@mui/material";

const ProfileCard = () => {
  return (
    <Box
      display="flex"
      gap={{ xs: 0, md: 7 }}
      alignItems="center"
      sx={{ cursor: "pointer" }}
    >
      <Avatar
        sx={{ width: { xs: 28, md: 39 }, height: { xs: 28, md: 39 } }}
        imgProps={{ referrerPolicy: "no-referrer" }}
      />
      <Box display={{ xs: "none", md: "Block" }}>
        <Typography
          fontSize="12px"
          fontWeight={500}
          whiteSpace="nowrap"
          color="text.secondary"
        >
          Satheeskaran
        </Typography>
        <Typography
          fontSize="10px"
          fontWeight={300}
          whiteSpace="nowrap"
          color="text.secondary"
        >
          satheesh@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
