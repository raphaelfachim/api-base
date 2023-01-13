import { HttpResponse } from "./http.response";

export class HttpError implements HttpResponse {
    statusCode: number = 500;
    body: any = {message: "Erro interno do servidor."};

    constructor(message?: string, statusCode?: number) {
        if(message) this.body = { message }
        if(statusCode) this.statusCode = statusCode;
    }
}