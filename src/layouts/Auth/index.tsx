import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { ReactComponent as TeamIcon } from "../../assets/icons/team.svg";

const AuthLayout = ({ children }: { children?: any }) => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="row"
      px="clamp(20px, 5vw, 70px)"
      pb={{ xs: "16px", sm: "30px" }}
      overflow="auto"
    >
      <Box
        width="60vw"
        height="100%"
        display={{ xs: "none", md: "flex" }}
        pt={{ xs: "16px", md: "102px" }}
        px="40px"
        flexDirection="column"
        alignItems="center"
      >
        <Box height="100%" display="flex" flexDirection="column" justifyContent="center">
          <Box width="100%" display="flex">
            <TeamIcon
              style={{
                margin: "auto",
                maxWidth: "628px",
                width: "100%",

                height: "500px",
              }}
            />
          </Box>
        </Box>
      </Box>

      <Box width={{ xs: "100%", md: "40%" }} pt={{ xs: "16px", md: "52px" }} height="100%" display="flex">
        {children ?? <Outlet />}
      </Box>
    </Box>
  );
};

export default AuthLayout;
