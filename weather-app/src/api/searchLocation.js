import axiosClient from "./axiosClient"

const searchLocationApi = {
    getTodayWithName : (name,API_Key) => {
        const url = `/weather?q=${name}&appid=${API_Key}`
        return axiosClient.get(url)
    },
    getPredictionWithName : (name,API_Key) => {
        const url =`/forecast?q=${name}&appid=${API_Key}`
        return axiosClient.get(url)
    }
}

export default searchLocationApi