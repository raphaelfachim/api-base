import { Request, Response } from "express";
import { HttpResponse } from "../http"

export const expressAdapter = (handle: (data?: any) => Promise<HttpResponse>) => {
    return async (req: Request, res: Response) => {
        const content = {
            ... (req.body || {}),
            ... (req.params || {}),
            ... (req.query || {})
        };

        let response: HttpResponse = {
            statusCode: 200,
            body: {}
        };

        response = await handle(content);

        res.status(response.statusCode).json(response.body);

    }
}