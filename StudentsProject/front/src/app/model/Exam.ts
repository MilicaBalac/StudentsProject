import { Subject } from './Subject';

interface ExamInterface {
    course: Subject;
    grade: number;
}

export class Exam implements ExamInterface {
    public course: Subject;
    public grade: number;

    constructor(exam: ExamInterface) {
        this.course = exam.course;
        this.grade = exam.grade;
    }
}

export interface ExamDTO {
    exam: Exam;
    index: string;
}
