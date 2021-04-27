import axios from "axios"

const API_BASE_URL = "http://127.0.0.1:8000"

const axiosAuth = function () {
    const token = window.localStorage.getItem("token")

    return axios.create({
        headers: {
            Authorization: JSON.parse(token),
        },
        baseURL: API_BASE_URL,
    })
}

export const api = {
    API_BASE_URL,
    axios: axios.create({ baseURL: API_BASE_URL }),
    axiosAuth,
}

api.login = userInfo => axios.post(`${API_BASE_URL}/api/api-login`, userInfo)
api.register = userInfo =>
    axios.post(`${API_BASE_URL}/api/api-register`, userInfo)
api.initialize = () => axiosAuth().get("/api/adv/init")
api.move = direction => axiosAuth().post("/api/adv/move", { direction })
api.say = message => axiosAuth().post("/api/adv/say", message)

export default api
