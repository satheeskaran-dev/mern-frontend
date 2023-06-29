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
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchField from "../../../../components/core/SearchField";
import ProfileCard from "../../../../components/core/ProfileCard";
import { SearchFieldWrapper, VerticalDivider } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../../store/slices/theme.slice";

interface Props {
  handleMenuButtonClicked: () => void;
}

const Header: React.FC<Props> = ({ handleMenuButtonClicked }) => {
  const isSmallDevice = useMediaQuery(useTheme().breakpoints.down(1050));
  const { palette } = useTheme();
  const dispatch = useDispatch();

  const mode = useSelector((state: any) => state.theme.mode);

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
          <IconButton sx={{ mr: 20 }} onClick={handleMenuButtonClicked}>
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box display={{ md: "none" }}>
          <Avatar sx={{ width: 30, height: 30 }} />
        </Box>
        <SearchFieldWrapper>
          <SearchField />
        </SearchFieldWrapper>
        <Box display="flex" alignItems="center" gap={24}>
          <IconButton sx={{ mr: 20 }} onClick={() => dispatch(toggleMode())}>
            {mode === "light" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

          <Box height={25}>
            <VerticalDivider />
          </Box>
          <ProfileCard />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
