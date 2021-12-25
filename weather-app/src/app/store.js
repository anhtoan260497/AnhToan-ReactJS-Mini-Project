import { configureStore } from '@reduxjs/toolkit'
import  dayControlReducer  from '../features/NavigationBar/DayControlSlice/dayControlSlice'
import currentLocationReducer from './currentLocationSlice'




export default configureStore({
    reducer : {
        isDay : dayControlReducer,
        getCurrentLocation : currentLocationReducer,
    
    }
})



