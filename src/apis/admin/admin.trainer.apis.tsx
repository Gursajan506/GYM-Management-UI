import axios from 'axios';
import BaseAPIs, {iApiBasicResponse} from "../base.apis";

export interface iTrainer {
    name: string,
    experience: string,
    id: number,
    image: string
}

export interface TrainerListResponse extends iApiBasicResponse {
    items?: iTrainer[]
}

export interface TrainerViewResponse extends iApiBasicResponse {
    item?: iTrainer
}

export default class AdminTrainerAPIs extends BaseAPIs {

    list = async (): Promise<TrainerListResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/fetch_trainer.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): TrainerListResponse => ({statusCode: res.status, ...res.data}))
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
    view = async (id: number): Promise<TrainerViewResponse> => {
        let fd = new FormData();
        fd.set("id", id.toString())
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/view_trainer.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): TrainerViewResponse => ({statusCode: res.status, ...res.data}))
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
        fd.set("name", values.name)
        fd.set("image", values.image)
        fd.set("experience", values.experience)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/create_trainer.php", fd, {
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
        fd.set("name", values.name)
        fd.set("image", values.image)
        fd.set("experience", values.experience)
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/update_trainer.php", fd, {
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
    delete = async (id: number): Promise<TrainerListResponse> => {
        let fd = new FormData();
        fd.set("id", id.toString())
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/delete_trainer.php", fd, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): TrainerListResponse => ({statusCode: res.status, ...res.data}))
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
