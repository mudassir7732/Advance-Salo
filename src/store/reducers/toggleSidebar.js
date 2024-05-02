import { createSlice } from "@reduxjs/toolkit";
const initialState=Boolean;

export const toggleSidebar = createSlice({
  name:'toggleSidebar',
  initialState,
  reducers:{
    toggle_sidebar:(state, action)=>{
      return(
        state = !state
      )
    }
  }
})
export const {toggle_sidebar} = toggleSidebar.actions;
export default toggleSidebar.reducer;