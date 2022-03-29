import axios, {AxiosInstance} from "axios";

class Api {
    private static axiosInstance: AxiosInstance;

    static init() {
        this.axiosInstance = axios.create({
            baseURL: 'https://venja-health-backend.herokuapp.com/dashboard'
        })
    }

    static async get<ResponseType>(url: string) {
        return Api.axiosInstance.get<ResponseType>(url)
    }
}

export default Api;