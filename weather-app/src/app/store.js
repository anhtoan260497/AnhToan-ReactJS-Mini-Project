import { configureStore } from '@reduxjs/toolkit'
import  dayControlReducer  from '../features/NavigationBar/DayControlSlice/dayControlSlice'
import navMenuReducer from '../features/NavigationBar/NavMenuSlice/navMenuSlice'



export default configureStore({
    reducer : {
        isDay : dayControlReducer,
        chooseMenu : navMenuReducer
    }
})

