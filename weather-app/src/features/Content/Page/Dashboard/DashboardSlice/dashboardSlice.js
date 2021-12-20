import { createSlice } from "@reduxjs/toolkit";



const initialState = { 
    data : []
 };

 

export const dashboardSlice  = createSlice({
    name : 'data',
    initialState : initialState.data,
    reducers : {
        getData : (state,action) =>{
            state.data = action.payload
        }
    }
})




export const { getData,getGeo } = dashboardSlice.actions
export default dashboardSlice.reducer