import {
  AppBar,
  Toolbar,
  Box,
  useMediaQuery,
  useTheme,
  Avatar,
  IconButton,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchField from "../../../../components/core/SearchField";
import ProfileCard from "../../../../components/core/ProfileCard";
import { MenuButton, SearchFieldWrapper, VerticalDivider } from "./styles";
import usePopover from "../../../../hooks/usePopover";
import RoomPreferencesOutlinedIcon from "@mui/icons-material/RoomPreferencesOutlined";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { UrlSlugType } from "../../../../utils/enums/UrlSlug.enum";

interface Props {
  handleSideDrawerOpen: () => void;
  user: any;
  mode: string;
}

const Header: React.FC<Props> = ({ handleSideDrawerOpen, mode, user }) => {
  const isSmallDevice = useMediaQuery(useTheme().breakpoints.down(1050));
  const { palette } = useTheme();

  const navigate = useNavigate();
  const [Popover, setAnchorEl] = usePopover();

  const handleOpenSettingsPopover = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );

  const handleNavigate = useCallback(
    (url: UrlSlugType) => {
      setAnchorEl(null);
      navigate(url);
    },
    [navigate, setAnchorEl]
  );

  return (
    <AppBar position="static" elevation={isSmallDevice ? 4 : 1}>
      <Toolbar
        disableGutters
        sx={{
          backgroundColor: palette.background.paper,
          px: isSmallDevice ? 16 : 75,
          justifyContent: { xs: "space-between", md: "unset" },
        }}
      >
        {isSmallDevice && (
          <IconButton sx={{ mr: 20 }} onClick={handleSideDrawerOpen}>
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box display={{ md: "none" }}>
          <Avatar sx={{ width: 30, height: 30 }} src={user?.image} />
        </Box>
        <SearchFieldWrapper>
          <SearchField />
        </SearchFieldWrapper>
        <Box display="flex" alignItems="center" gap={24}>
          <Box height={25}>
            <VerticalDivider />
          </Box>
          <ProfileCard {...user} onClick={handleOpenSettingsPopover} />
        </Box>
      </Toolbar>
      <Popover
        paperSx={{
          sx: {
            mt: 15,
            px: 0,
            py: 13,
            width: "100%",
            maxWidth: 250,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuButton
          icon={<RoomPreferencesOutlinedIcon />}
          name="Preferences"
          onClick={() => handleNavigate(UrlSlugType.PREFERENCES)}
        />
      </Popover>
    </AppBar>
  );
};

export default Header;
