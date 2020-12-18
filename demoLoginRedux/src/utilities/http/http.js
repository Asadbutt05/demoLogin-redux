import axios from 'axios';
import Config from "react-native-config";

const requestInterceptor = request => {
    request.headers.Authorization = `JWT-asdasdasq312312312`;
    request.url = Config.BASE_URL + request.url
    console.log(Config.BASE_URL)

    console.log(request)
    return request;
}


const successInterceptor = response => {
    console.log(`Success: ${response}`);
}


const errorInterceptor = error => {
    console.error(`Error: ${error}`);
}

let axiosInstance = axios.create();

class HTTPClient {

    constructor() {    

        axiosInstance.interceptors.request.use(requestInterceptor);
        axiosInstance.interceptors.response.use(
            response => {
                successInterceptor(response);
                return response;
            },
            error => {
                errorInterceptor(error);
                return Promise.reject({ ...error });
            }
        );
    }

    get(url) {
        return axiosInstance.get(url)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    post(url, data = {}) {
        return axiosInstance.post(url, data)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    put(url, data = {}) {
        return axiosInstance.put(url, data)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    delete(url) {
        return axiosInstance.delete(url)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

}

export default new HTTPClient;