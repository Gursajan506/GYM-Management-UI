import axios from 'axios';
import BaseAPIs, {iApiBasicResponse} from "../base.apis";

export interface iDietPlan {
    title: string,
    description: string,
    id: number,
    image: string
}

export interface DietPlanListResponse extends iApiBasicResponse {
    items?: iDietPlan[]
}

export interface DietPlanViewResponse extends iApiBasicResponse {
    item?: iDietPlan
}

export default class AdminDietPlanAPIs extends BaseAPIs {

    list = async (): Promise<DietPlanListResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/fetch_diet_plan.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): DietPlanListResponse => ({statusCode: res.status, ...res.data}))
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
    view = async (id: number): Promise<DietPlanViewResponse> => {
        let fd = new FormData();
        fd.set("id", id.toString())
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/view_diet_plan.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): DietPlanViewResponse => ({statusCode: res.status, ...res.data}))
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


    create = async (values: any): Promise<iApiBasicResponse> => {
        let fd = new FormData();
        fd.set("title", values.title)
        fd.set("image", values.image)
        fd.set("description", values.description)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/create_diet_plan.php", fd, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): iApiBasicResponse => ({statusCode: res.status, ...res.data}))
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

    update = async (values: any): Promise<iApiBasicResponse> => {
        let fd = new FormData();
        fd.set("id", values.id)
        fd.set("title", values.title)
        fd.set("image", values.image)
        fd.set("description", values.description)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/update_diet_plan.php", fd, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): iApiBasicResponse => ({statusCode: res.status, ...res.data}))
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
    delete = async (id: number): Promise<DietPlanListResponse> => {
        let fd = new FormData();
        fd.set("id", id.toString())
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/delete_diet_plan.php", fd, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): DietPlanListResponse => ({statusCode: res.status, ...res.data}))
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
