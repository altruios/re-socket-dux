import { createSlice } from '@reduxjs/toolkit';
export const testSlice = createSlice({
    name:"test",
    initialState:[{
        test:0,
        state2:true
    }],
    reducers:{
        update:(state,action)=>{
            console.log("update called");
            console.log("action is:", action);
            return action.payload;
        }
    },
});
export const {update}=testSlice.actions;
export const select_test= (state) =>{
    return state.test.test;
}
export const select_state2 = (state) =>{
     return state.test.state2;
}
export default testSlice.reducer;
