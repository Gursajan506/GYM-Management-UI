import axios from 'axios';
import {User} from "../../reducer";
import BaseAPIs, {iApiBasicResponse} from "../base.apis";

export interface iUserLoginResponse extends iApiBasicResponse, User {
    authenticated?: boolean
}

export interface iCollectionElement {
    id: number
    created_at: string
    updated_at: string,
}


export interface iFetchUserResponse extends iApiBasicResponse, User {

}

export default class AdminUserAPIs extends BaseAPIs {

    login = async (username: string, password: string): Promise<iUserLoginResponse> => {

        let fd = new FormData();
        fd.set("username", username);
        fd.set("password", password);
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/login.php", fd, {
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

}
