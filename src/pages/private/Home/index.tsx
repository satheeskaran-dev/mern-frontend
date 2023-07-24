import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../store/slices/notification.slice";
import { Fragment } from "react";

interface Props {}

const Home: React.FC<Props> = (props) => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Typography
        variant="h3"
        onClick={() =>
          dispatch(
            showNotification({
              title: "tile",
              msg: "User successfully updated ",
            })
          )
        }
      >
        Home page
      </Typography>
      <Button
        variant="contained"
        onClick={() => window.open("api/v1/auth/google/login")}
      >
        Google
      </Button>
    </Fragment>
  );
};

export default Home;
