import axiosClient from "./axiosClient";



const configAxiosReq = {
    getApi(query) {
       return  axiosClient.get(query)
    }
}


export default configAxiosReq