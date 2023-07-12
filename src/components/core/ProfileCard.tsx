import { Avatar, Box, BoxProps, Typography } from "@mui/material";
interface ProfileCardProps {
  firstName: string;
  lastName: string;
  image: string;
  email: string;
}
const ProfileCard: React.FC<ProfileCardProps & BoxProps> = ({
  firstName,
  lastName,
  email,
  image,
  ...props
}) => {
  return (
    <Box
      display="flex"
      gap={{ xs: 0, md: 7 }}
      alignItems="center"
      sx={{ cursor: "pointer" }}
      {...props}
    >
      <Avatar
        src={image}
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
          {firstName + " " + lastName}
        </Typography>
        <Typography
          fontSize="10px"
          fontWeight={300}
          whiteSpace="nowrap"
          color="text.secondary"
        >
          {email}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
