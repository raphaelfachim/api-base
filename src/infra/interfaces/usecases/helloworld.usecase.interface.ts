export interface IHelloWorldUseCase {
    execute(dto: any): Promise<any>;
}