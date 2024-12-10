export class Student{
    id: number;
    name: string;
    avg:number
    is_active:boolean;

    constructor(name: string,avg:number,is_active:boolean)  {
        this.id = 0;
        this.name = name;
        this.is_active=is_active;
        this.avg=avg;
    }
}