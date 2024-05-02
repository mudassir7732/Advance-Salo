import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login_user: (state, action) => {
      return (
        (state = [...state, action.payload]),
        console.log(action.payload, " = state")
      );
    },
    logout_user: (state, action) => {
      return (state = []);
    },
  },
});
export const { login_user, logout_user } = loginSlice.actions;
export default loginSlice.reducer;
