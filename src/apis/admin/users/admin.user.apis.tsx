import axios from 'axios';
import BaseAPIs, {iApiBasicResponse} from "../../base.apis";
import {User} from "../../../reducer";
import {PaymentListResponse} from "../admin.payment.apis";


export interface UserListResponse extends iApiBasicResponse {
    users?: User[]
}

export interface UserResponse extends iApiBasicResponse {
    user?: User
}

export default class AdminUserListAPIs extends BaseAPIs {

    view = async (id:number): Promise<UserResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/fetch_user.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
                params:{
                    id:id
                }
            })
            .then((res): UserResponse => ({statusCode: res.status, ...res.data}))
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
    list = async (): Promise<UserListResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/fetch_users.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): UserListResponse => ({statusCode: res.status, ...res.data}))
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
    create_user = async (values:any): Promise<PaymentListResponse> => {
        let fd=new FormData();
        fd.set("username",values.username)
        fd.set("password",values.password)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/create_user.php", fd ,{
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): PaymentListResponse => ({statusCode: res.status, ...res.data}))
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
    edit_user = async (values:any): Promise<PaymentListResponse> => {
        let fd=new FormData();
        fd.set("username",values.username)
        fd.set("password",values.password)
        fd.set("id",values.id.toString())
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/update_user.php", fd ,{
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): PaymentListResponse => ({statusCode: res.status, ...res.data}))
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
    delete_user = async (id:number): Promise<PaymentListResponse> => {
        let fd=new FormData();
        fd.set("id",id.toString())
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/delete_user.php", fd ,{
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): PaymentListResponse => ({statusCode: res.status, ...res.data}))
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
