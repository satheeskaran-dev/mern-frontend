import { Button, Typography } from "@mui/material";
// import { useGetAllUsersQuery } from "../../../service/userService";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../store/slices/notification.slice";
import { Fragment } from "react";
import {
  useGoogleLoginQuery,
  useLazyGoogleLoginQuery,
} from "../../../service/authService";

interface Props {}

const Home: React.FC<Props> = (props) => {
  // const { data, isSuccess } = useGetAllUsersQuery(null);
  const dispatch = useDispatch();
  const [googleLogin, { isLoading }] = useLazyGoogleLoginQuery();
  const { data } = useGoogleLoginQuery(null);

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
        onClick={() =>
          window.open("http://localhost:8000/api/v1/auth/google/login")
        }
      >
        Google
      </Button>
    </Fragment>
  );
};

export default Home;
