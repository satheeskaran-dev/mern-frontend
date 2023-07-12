import { Box, Typography } from "@mui/material";
import { useGetAllUsersQuery } from "../../../service/userService";

interface Props {}

const Home: React.FC<Props> = (props) => {
  const { data } = useGetAllUsersQuery(null);

  console.log(data);

  return <Typography variant="h3">Home page</Typography>;
};

export default Home;
