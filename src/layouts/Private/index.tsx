import { useState, useCallback } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/slices/auth.slice";
import { Mode } from "../../store/slices/theme.slice";

const PrivateLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const user = useSelector((state: any) => state?.auth?.user);
  const mode: Mode = useSelector((state: any) => state?.theme?.mode);

  const dispatch = useDispatch();

  const handleSideDrawerOpen = useCallback(() => setOpen(true), []);
  const handleSideDrawerClose = useCallback(() => setOpen(false), []);
  const handleLogout = useCallback(() => dispatch(logOut()), [dispatch]);

  return (
    <Box width="100vw" height="100vh" display="flex">
      <SideBar
        isOpen={open}
        handleClose={handleSideDrawerClose}
        signOutClick={handleLogout}
      />
      <Box width="100%">
        <Header {...{ handleSideDrawerOpen, user, mode }} />
        <Box
          width="100%"
          height="calc(100% - 60px)"
          sx={{
            backgroundColor: {
              xs: (theme) => theme.palette.background.default,
              md: (theme) => theme.palette.background.paper,
            },
          }}
          p={{ xs: "30px 16px ", md: 30 }}
          overflow="auto"
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default PrivateLayout;
