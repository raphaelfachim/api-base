import { HTTP_OK } from "./http-code";
import { HttpResponse } from "./http.response";

export class HttpOk implements HttpResponse {

    statusCode: number = HTTP_OK;
    body: any = { };
    
    constructor(body: any, statusCode?: number) {
        this.body = body;
        if(statusCode) this.statusCode = statusCode;
     }
}