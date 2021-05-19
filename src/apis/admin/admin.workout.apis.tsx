import axios from 'axios';
import BaseAPIs, {iApiBasicResponse} from "../base.apis";

export interface iWorkout {
    title: string,
    description: string,
    id: number,
    image: string
}

export interface WorkoutListResponse extends iApiBasicResponse {
    items?: iWorkout[]
}

export interface WorkoutViewResponse extends iApiBasicResponse {
    item?: iWorkout
}

export default class AdminWorkoutListAPIs extends BaseAPIs {

    list = async (): Promise<WorkoutListResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/fetch_workouts.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): WorkoutListResponse => ({statusCode: res.status, ...res.data}))
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
    view = async (id: number): Promise<WorkoutViewResponse> => {
        let fd = new FormData();
        fd.set("id", id.toString())
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/view_workout.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): WorkoutViewResponse => ({statusCode: res.status, ...res.data}))
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
            .post(this.getApiBaseURL() + "/apis/admin/create_workout.php", fd, {
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
            .post(this.getApiBaseURL() + "/apis/admin/update_workout.php", fd, {
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
    delete = async (id: number): Promise<WorkoutListResponse> => {
        let fd = new FormData();
        fd.set("id", id.toString())
        return axios
            .post(this.getApiBaseURL() + "/apis/admin/delete_workout.php", fd, {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): WorkoutListResponse => ({statusCode: res.status, ...res.data}))
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
