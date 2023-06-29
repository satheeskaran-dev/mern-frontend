import { styled, Avatar, Box, BoxProps, AvatarProps } from "@mui/material";
import { ReactComponent as CameraIcon } from "../../assets/icons/camera.svg";
import { ChangeEvent } from "react";

const ProfileWrapper = styled((props: BoxProps) => (
  <Box width="84px" height="84px" borderRadius="50%" p={3} {...props} />
))(({ theme }) => ({
  border: `2px solid ${theme.palette.primary.main}`,
  position: "relative",
}));

const CameraWrapper = styled(({ sx, ...props }: BoxProps) => (
  <Box
    component="label"
    borderRadius="50%"
    sx={{ position: "absolute", cursor: "pointer", ...sx }}
    {...props}
  />
))({});

const accept = "image/png,image/jpg,image/jpeg,image/webp";

export type AvatarUploaderPropType = {
  src?: string;
  disabled?: boolean;
  wrapperBoxProps?: BoxProps;
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const AvatarUploader = ({
  src,
  disabled,
  handleChange,
  wrapperBoxProps,
  sx,
  ...props
}: AvatarUploaderPropType & AvatarProps) => {
  return (
    <ProfileWrapper sx={{ width: 84, height: 84 }} {...wrapperBoxProps}>
      <Avatar
        src={src}
        sx={{
          width: "100%",
          height: "100%",
          ...sx,
        }}
        {...props}
      />

      <CameraWrapper sx={{ bottom: -5, right: -5 }}>
        <CameraIcon style={{ width: 30, height: 30 }} />
        <input
          hidden
          accept={accept}
          type="file"
          disabled={disabled}
          onChange={handleChange}
        />
      </CameraWrapper>
    </ProfileWrapper>
  );
};

export default AvatarUploader;
