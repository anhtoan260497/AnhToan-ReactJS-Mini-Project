import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    choose : 'Dashboard'
}

export const navMenuSlice = createSlice({
    name : 'menu',
    initialState : initialState, 
    reducers : {
        changeActive : (state,action) => {
        state.choose = action.payload
        }
    }
})

export const {  changeActive } = navMenuSlice.actions
export default navMenuSlice.reducer