import axiosClientIQA from "./axiosClientIQA"

const IQAApi = {
    getTodayWithGeo : (lat,lon,API_Key) => {
        const url = `/nearest_city?lat=${lat}&lon=${lon}&key=${API_Key}`
        return axiosClientIQA.get(url)
    }
}

export default IQAApi