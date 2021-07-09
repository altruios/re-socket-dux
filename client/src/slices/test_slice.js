import { createSlice } from '@reduxjs/toolkit';
export const testSlice = createSlice({
    name:"test",
    initialState:{
        test:"has initial state",
        state2:true
    },
    reducers:{
        update:(state,action)=>{
            console.log("update called");
            console.log("action is:", action);
            state.state2=action.payload;
            return state;
        }
    },
});
export const {update}=testSlice.actions;
export const select_test = (state) => {
     console.log("selected test", state);
    return state.test;
}

export default testSlice.reducer;
