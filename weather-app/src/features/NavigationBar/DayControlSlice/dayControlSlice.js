import { createSlice } from "@reduxjs/toolkit";

// Slice for Day and Night Status

let date = new Date();
let hours = date.getHours();
let isDay;
if (Math.abs(hours - 12) < 6) {
  isDay = true;
} else {
  isDay = false;
}

const initialState = { isDay : isDay };

export const dayControlSlice  = createSlice({
    name : 'changeDay',
    initialState,
    reducers : {
        changeDay : (state) =>{
            state.isDay = !state.isDay
        }
    }
})

export const { changeDay } = dayControlSlice.actions
export default dayControlSlice.reducer