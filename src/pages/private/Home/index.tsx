import { Box } from "@mui/material";
import { useGetAllUsersQuery } from "../../../service/userService";

interface Props {}

const Home: React.FC<Props> = (props) => {
  const { data } = useGetAllUsersQuery(null);

  return <Box>{JSON.stringify(data)}</Box>;
};

export default Home;
