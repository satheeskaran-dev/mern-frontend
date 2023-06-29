import { Fragment, useCallback } from "react";
import {
  Paper,
  Box,
  Drawer,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MenuItems, { MenuItemsPropsType } from "./MenuItems";
import { MenuItemButton } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

type SideBarPropsType = {
  isOpen: boolean;
  handleClose: () => void;
  signOutClick: () => void;
};

const SideBar = ({ isOpen, handleClose, signOutClick }: SideBarPropsType) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isSmallDevices = useMediaQuery(useTheme().breakpoints.down(1050));

  const isLocationActive = useCallback(
    (params: string) => pathname.includes(params),
    [pathname]
  );

  const content = (
    <Paper
      elevation={3}
      sx={{
        width: 215,
        minWidth: 215,
        height: "100vh",
        py: 16,
        display: "flex",
        flexFlow: "column",
        overflow: "auto",
      }}
    >
      <Box mx="auto" sx={{ cursor: "pointer" }}>
        <Avatar sx={{ width: 30, height: 30 }} />
      </Box>

      <Box mt={40} flexGrow={1}>
        {MenuItems().map((menu: MenuItemsPropsType) => (
          <MenuItemButton
            onClick={() => {
              navigate(menu.path);
              handleClose();
            }}
            key={menu.name}
            icon={menu.icon}
            name={menu.name}
            isActive={isLocationActive(menu.path)}
          />
        ))}
      </Box>
      <MenuItemButton
        mb={0}
        icon={<LogoutOutlinedIcon color="error" />}
        name="Sign Out"
        error
        onClick={signOutClick}
      />
    </Paper>
  );
  return (
    <Fragment>
      {isSmallDevices ? (
        <Drawer anchor="left" open={isOpen} onClose={handleClose}>
          {content}
        </Drawer>
      ) : (
        content
      )}
    </Fragment>
  );
};

export default SideBar;
