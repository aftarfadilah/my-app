export default class Question {
    question:string;
    option_a:string;
    option_b:string;
    option_c:string;
    option_d:string;
    answer:string;
    
    constructor(question:string, option_a:string, option_b:string, option_c:string,option_d:string, answer:string)
    {
        this.question=question,
        this.option_a=option_a,
        this.option_b=option_b,
        this.option_c=option_c,
        this.option_d=option_d,
        this.answer=answer
    };
}
