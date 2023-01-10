import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { PayloadAction } from "@reduxjs/toolkit";

interface LoginPayload {
  uid: string;
  email: string;
}

interface UserState {
  user: {
    uid: string | null;
    email: string | null;
  };
}

const initialState: UserState = {
  user: {
    uid: null,
    email: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: null, email: null };
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
