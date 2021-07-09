import { createSlice } from '@reduxjs/toolkit';
export const testSlice = createSlice({
    name:"test",
    initialState:{
        message:"initial state(sent to server)",
        responce:false
    },
    reducers:{
        update:(state,action)=>{
            console.log("update called");
            console.log("action is:", action);
            state.responce=action.payload;
            return state;
        }
    },
});
export const {update}=testSlice.actions;
export const select_test = (state) => {
    return state.test;
}

export default testSlice.reducer;
