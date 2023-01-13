import { HttpError, HttpOk, HttpResponse } from "../infra/http";
import { HelloWorldUseCase } from "../usecases/helloworld.usecase";

export class TestController {

    constructor( ) { }

    helloWorld = async (dto: any): Promise<HttpResponse> => {
        try{
            var result: any = await new HelloWorldUseCase().execute(dto);
            return new HttpOk(result);
        } catch(ex) {
            return new HttpError();
        }
        
    }

}