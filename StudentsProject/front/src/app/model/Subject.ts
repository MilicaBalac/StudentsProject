interface SubjectInterface {
    id?: number;
    code: string;
    name: string;
    espb: number;
}

export class Subject implements SubjectInterface {
    public id: number;
    public code: string;
    public name: string;
    public espb: number;

    constructor(subjectCfg: SubjectInterface) {
        this.id = subjectCfg.id;
        this.code = subjectCfg.code;
        this.name = subjectCfg.name;
        this.espb = subjectCfg.espb;
    }
}