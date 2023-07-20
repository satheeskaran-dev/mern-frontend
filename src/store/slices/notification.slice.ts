import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type NotificationStateType = {
  status: boolean;
  title: string;
  msg?: string;
};

const initialState: NotificationStateType = {
  status: false,
  title: "",
  msg: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (
      state: NotificationStateType,
      action: PayloadAction<Omit<NotificationStateType, "status">>
    ): NotificationStateType => ({
      status: true,
      ...action.payload,
    }),
    closeNotification: () => initialState,
  },
});

export const { showNotification, closeNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
