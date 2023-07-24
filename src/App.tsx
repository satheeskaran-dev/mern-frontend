import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useDispatch, useSelector } from "react-redux";
import ThemeWrapper from "./ThemeWrapper";
import Snackbar from "./components/core/Snackbar";
import {
  NotificationStateType,
  closeNotification,
} from "./store/slices/notification.slice";
import { setAuth } from "./store/slices/auth.slice";

const bc = new BroadcastChannel("SSO");

function App() {
  const token = useSelector((state: any) => state.auth.token);
  const { status, msg, title } = useSelector(
    (state: any) => state.notification as NotificationStateType
  );
  const dispatch = useDispatch();
  bc.onmessage = (event) => dispatch(setAuth(event.data));

  return (
    <ThemeWrapper>
      {token ? <PrivateRoutes /> : <PublicRoutes />}
      <Snackbar
        open={status}
        title={title}
        msg={msg}
        handleClose={() => dispatch(closeNotification())}
      />
    </ThemeWrapper>
  );
}

export default App;
