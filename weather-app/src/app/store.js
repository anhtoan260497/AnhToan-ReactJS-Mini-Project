import { configureStore } from '@reduxjs/toolkit'
import  dayControlReducer  from '../features/NavigationBar/DayControlSlice/dayControlSlice'




export default configureStore({
    reducer : {
        isDay : dayControlReducer,
    }
})



