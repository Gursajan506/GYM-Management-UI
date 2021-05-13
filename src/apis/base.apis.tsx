import axios, {CancelTokenSource} from 'axios';



export interface iApiBasicResponse {
    statusCode: number
    message?: string
    validation_errors?: {
        [key: string]: string | Array<string>
    }
}



export interface iMultilevelStringOrNumber {
    [key: string]: undefined | string | string[] | number | number[] | boolean | boolean[] | iMultilevelStringOrNumber | iMultilevelStringOrNumber[]
}

export default class BaseAPIs {

    static hasError = (response: iApiBasicResponse,addToast?:any) => {
        if(!response || response.statusCode >= 400){
            response && response.message && addToast && addToast(response.message, {appearance: 'error'})
        }else {
            response && response.message && addToast && addToast(response.message, {appearance: 'success'})
        }
        if (!response || response.statusCode >= 400) return true;
        if (!response || response.validation_errors) return true;
    };

    getApiBaseURL = () => {
        const DEBUG = process.env.NODE_ENV !== 'production';
        return DEBUG ? "http://localhost" : (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port);
    };
}
