import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/Content/Page/Dashboard/DashboardSlice/dashboardSlice'
import  dayControlReducer  from '../features/NavigationBar/DayControlSlice/dayControlSlice'
import navMenuReducer from '../features/NavigationBar/NavMenuSlice/navMenuSlice'
import currentLocationReducer from './currentLocationSlice'




export default configureStore({
    reducer : {
        isDay : dayControlReducer,
        chooseMenu : navMenuReducer,
        getData : dashboardReducer,
        getCurrentLocation : currentLocationReducer,
    
    }
})



