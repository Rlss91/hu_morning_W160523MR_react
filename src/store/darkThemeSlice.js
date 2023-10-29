import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkTheme: false,
};

const darkTheme = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //collection of functions to setState
    changeTheme(state) {
      state.darkTheme = !state.darkTheme;
    },
  },
});

//export the set functions for the components to make use of the actions
export const darkThemeActions = darkTheme.actions;

//in reducer we have all the necessary data to connect with the big pie
export default darkTheme.reducer;
