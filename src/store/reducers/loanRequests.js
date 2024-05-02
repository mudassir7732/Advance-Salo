import { createSlice } from "@reduxjs/toolkit"
const initialState=[]

export const loanRequests = createSlice({
  name:'loan',
  initialState,
  reducers:{
    add_loan_request:(state, action)=>{
      return( state=[...state, action?.payload])
    },
    delete_request:(state, action)=>{
      return(state)
    }
  }
})
export const {add_loan_request, delete_request} = loanRequests.actions;
export default loanRequests.reducer;