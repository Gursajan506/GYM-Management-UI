import axios from 'axios';
import {DashboardCardProps} from "../../pages/Admin/DashboardCard";
import BaseAPIs, {iApiBasicResponse} from "../base.apis";
import {iTrainer} from "./admin.trainer.apis";
import {iWorkout} from "./admin.workout.apis";
import {iDietPlan} from "./admin.diet.plan.apis";

export interface UserDashboard {
    trainers: iTrainer[],
    workouts: iWorkout[],
    diet_plans: iDietPlan[],

}

export interface DashboardUserResponse extends iApiBasicResponse {
    dashboard?: UserDashboard
}

export interface DashboardResponse extends iApiBasicResponse {
    dashboard?: DashboardCardProps[]
}

export default class AdminDashboardAPIs extends BaseAPIs {
    get_dashboard = async (): Promise<DashboardResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/admin/dashboard.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): DashboardResponse => ({statusCode: res.status, ...res.data}))
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
    get_user_dashboard = async (): Promise<DashboardUserResponse> => {
        return axios
            .get(this.getApiBaseURL() + "/apis/user/dashboard.php", {
                headers: {"Content-Type": "application/x-www-form-urlencoded"},
                withCredentials: true,
            })
            .then((res): DashboardUserResponse => ({statusCode: res.status, ...res.data}))
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
