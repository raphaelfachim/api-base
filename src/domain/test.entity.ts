export class Test {

    public id: number;
    public name: string;
    public created: Date;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        this.created = new Date();
    }

}