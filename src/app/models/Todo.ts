export class Todo {
    id!: number;
    name!: string;
    done!: boolean;
    doneCreated!: Date;

    constructor(name: string) {
        this.id = Math.floor(Math.random() * 100);
        this.done = false;
        this.doneCreated = new Date();
        this.name = name;
    }
}