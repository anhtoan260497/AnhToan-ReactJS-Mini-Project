import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '../features/Content/Page/Dashboard/DashboardSlice/dashboardSlice'
import  dayControlReducer  from '../features/NavigationBar/DayControlSlice/dayControlSlice'
import currentLocationReducer from './currentLocationSlice'




export default configureStore({
    reducer : {
        isDay : dayControlReducer,
        getData : dashboardReducer,
        getCurrentLocation : currentLocationReducer,
    
    }
})



