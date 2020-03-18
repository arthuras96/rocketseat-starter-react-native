import axios from "axios";
// import { GetToken, GetIdPerson } from "./auth";

const Api = axios.create({
    // baseURL: "https://localhost:44351"
    baseURL: "https://rocketseat-node.herokuapp.com/api"
});

Api.interceptors.request.use(async config => {
    // const token = GetToken();
    // const idPerson = GetIdPerson();
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //     config.headers["content-type"] = "application/json";
    //     config.headers["idperson"] = `${idPerson}`;
    // }
    // console.log(config);
    return config;
});

export default Api;