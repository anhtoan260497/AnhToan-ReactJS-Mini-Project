import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import currentLocationApi from "../api/currentLocation";


export const getCurrent = createAsyncThunk('current/getCurrent',async (params,thunkAPI)=> {
    const [lat,lon,API_Key] = params
    const currentLocationData = await currentLocationApi.getTodayWithGeo(lat,lon,API_Key)
    return currentLocationData.data
})

const currentLocationSlice = createSlice({
    name : 'currentLocation',
    initialState : {
        data :'',
        isLoading : true,
        error : ''
    },
    reducers : {


    },
    extraReducers : {
[getCurrent.pending] : (state) => {
    state.isLoading =  true
},
[getCurrent.fulfilled] : (state,action) => {
    state.isLoading = false
    state.data = action.payload
}
,
[getCurrent.error] : (state,action) => {
    console.log('error')
},
}
})

const { reducer : currentLocationReducer } = currentLocationSlice
export default currentLocationReducer