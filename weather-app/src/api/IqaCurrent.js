import axiosClientIQA from "./axiosClientIQA"

const currentLocationApi = {
    getTodayWithGeo : (lat,lon,API_Key) => {
        const url = `lat=${lat}&lon=${lon}&key=${API_Key}`
        return axiosClientIQA.get(url)
    }
}

export default currentLocationApi