import { createSlice } from '@reduxjs/toolkit';

export const server_sender = createSlice({
    name:"server_sender",
    initialState:"",//errors stored here
    reducers:{
     output:(state,action)=>{
          //built with the Handle class
          console.log("in output;");
          
          const type = action.payload[0];
          const payload = action.payload[1];
          action.payload[2].emit(type,payload);
          return state;
     }
  }    
});
export const {output}=server_sender.actions;
export default server_sender.reducer;
