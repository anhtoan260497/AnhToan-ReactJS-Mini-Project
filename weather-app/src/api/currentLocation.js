import axiosClient from "./axiosClient"

const currentLocationApi = {
    getTodayWithGeo : (lat,lon,API_Key) => {
        const url = `/weather?lat=${lat}&lon=${lon}&appid=${API_Key}`
        return axiosClient.get(url)
    }
}

export default currentLocationApi