
import axios from 'axios';
import {User} from "../../reducer";
import BaseAPIs, {iApiBasicResponse} from "../base.apis";

export interface iUserLoginResponse extends iApiBasicResponse,User{
    authenticated?: boolean
}

export interface iCollectionElement {
    id: number
    created_at: string
    updated_at: string,
}


export interface iFetchUserResponse extends iApiBasicResponse, User {

}

export default class UserAPIs extends BaseAPIs {

    login = async (username: string, password: string): Promise<iUserLoginResponse> => {

        let fd = new FormData();
        fd.set("username", username);
        fd.set("password", password);
        return axios
            .post(this.getApiBaseURL() + "/apis/user/login.php", fd, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): iUserLoginResponse => ({statusCode: res.status, ...res.data}))
            .catch((error): any => {
                if (error && error.response && error.response.status && error.response.data) {
                    return {
                        message: "Network Error", ...error.response.data, statusCode: error.response.status
                    }
                } else {
                    return {statusCode: 999, message: "Network Error"};
                }
            })
    };

    fetch_user = async (): Promise<iFetchUserResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/getuser.php", {

                withCredentials: true,
            })
            .then((res): iFetchUserResponse => ({statusCode: res.status, ...res.data}))
            .catch((error): any => {
                if (error && error.response && error.response.status && error.response.data) {
                    return {
                        message: "Network Error", ...error.response.data, statusCode: error.response.status
                    }
                } else {
                    return {statusCode: 999, message: "Network Error"};
                }
            })
    };

    logout = async (): Promise<iApiBasicResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/logout.php", {
                withCredentials: true,
            })
            .then((res): iApiBasicResponse => ({statusCode: res.status, ...res.data}))
            .catch((error): any => {
                if (error && error.response && error.response.status && error.response.data) {
                    return {
                        message: "Network Error", ...error.response.data, statusCode: error.response.status
                    }
                }
            })
    };

}
