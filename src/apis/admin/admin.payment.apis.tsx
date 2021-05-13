import axios from 'axios';
import BaseAPIs, {iApiBasicResponse} from "../base.apis";

export interface iPayment{
    created:string,
    amount:string,
    id:number,
    username:string
    user_id:number
}
export interface PaymentListResponse extends iApiBasicResponse {
    payments?: iPayment[]
}

export default class AdminPaymentListAPIs extends BaseAPIs {

    list = async (): Promise<PaymentListResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/fetch_payment.php", {
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

    create_payment = async (values:any): Promise<PaymentListResponse> => {
        let fd=new FormData();
        fd.set("amount",values.amount)
        fd.set("user_id",values.user_id)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/create_payment.php", fd ,{
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
    edit_payment = async (values:any): Promise<PaymentListResponse> => {
        let fd=new FormData();
        fd.set("amount",values.amount)
        fd.set("id",values.id)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/update_payment.php", fd ,{
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
    delete_payment = async (id:number): Promise<PaymentListResponse> => {
        let fd=new FormData();
        fd.set("id",id.toString())
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/delete_payment.php", fd ,{
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
