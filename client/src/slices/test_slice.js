import { createSlice } from '@reduxjs/toolkit';
export const testSlice = createSlice({
    name:"test",
    initialState:{
          message:"initial state(sent to server)",
          message2:"second state(also sent to server)",
          message3:"user defined responce",
          responce:false,
          response2:false,
    },
    reducers:{
        update:(state,action)=>{
            console.log("update called");
            console.log("action is:", action);
            state.responce=action.payload;
            return state;
        },
        update2:(state,action)=>{
          console.log("update called");
          console.log("action is:", action);
          state.responce2=action.payload;
          return state;
      }
    },
});
export const {update,update2}=testSlice.actions;
export const select_test = (state) => {
     return state.test;
 }
 export const select_test2 = (state) => {
     return state.test.message2;
 }
  
export default testSlice.reducer;
