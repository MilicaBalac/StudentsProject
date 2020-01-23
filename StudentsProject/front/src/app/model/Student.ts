import { Exam } from './Exam';

export interface StudentInterface {
    id?: number;
    firstName: string;
    lastName: string;
    cardNumber: string;
    exams?: Exam[];
}

export class Student implements StudentInterface {
    public id: number;
    public firstName: string;
    public lastName: string;
    public cardNumber: string;
    public exams: Exam[];

    constructor(studentCfg: StudentInterface) {
        this.id = studentCfg.id;
        this.firstName = studentCfg.firstName;
        this.lastName = studentCfg.lastName;
        this.cardNumber = studentCfg.cardNumber;
        this.exams = studentCfg.exams || [];
    }
}