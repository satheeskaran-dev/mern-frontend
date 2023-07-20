import { Typography } from "@mui/material";
// import { useGetAllUsersQuery } from "../../../service/userService";
import { useDispatch } from "react-redux";
import { showNotification } from "../../../store/slices/notification.slice";

interface Props {}

const Home: React.FC<Props> = (props) => {
  // const { data, isSuccess } = useGetAllUsersQuery(null);
  const dispatch = useDispatch();

  return (
    <Typography
      variant="h3"
      onClick={() =>
        dispatch(
          showNotification({ title: "tile", msg: "User successfully updated " })
        )
      }
    >
      Home page
    </Typography>
  );
};

export default Home;
