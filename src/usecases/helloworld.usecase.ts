import { IHelloWorldUseCase } from "../infra/interfaces/usecases";

export class HelloWorldUseCase implements IHelloWorldUseCase {
    execute(dto: any): Promise<any> {
        var greetings = "Hello world!"
        if(dto.name) greetings = greetings.concat(" Nice to meet you ").concat(dto.name);
        return Promise.resolve({greetings: greetings});
    }
}