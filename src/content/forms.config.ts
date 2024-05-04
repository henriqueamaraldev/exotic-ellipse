import { leadReportForm } from "./forms/lead-report.form";

export const formsCollection: Form[] = [leadReportForm]

export class Form {

    questions: Question[]
    name: string

    constructor(name: string, questions: Question[]) {
        this.name = name;
        this.questions = questions;
    }

    addQuestion(question: Question) {

        this.questions.push(question);
    }
}

export class Question {
    title: string
    subtitle: string

    constructor(title: string, subtitle: string) {
        this.title = title;
        this.subtitle = subtitle;
    }
}

export class SingleSelectQuestion extends Question {

    label: string
    options: string[]

    constructor(title: string, subtitle: string, label: string, options: string[] = []) {
        super(title, subtitle);
        this.label = label;
        this.options = options;
    }

    addOption(option: string) {

        this.options.push(option);
    }
}

export class MultipleInputQuestion extends Question {

    label: string;
    inputQuestions: InputQuestion[] = [];

    constructor(title: string, subtitle: string, label: string, inputQuestions: InputQuestion[] = []) {
        super(title, subtitle);
        this.label = label;
        this.inputQuestions = inputQuestions;
    }

    addInputQuestion(inputQuestion: InputQuestion) {

        this.inputQuestions.push(inputQuestion);
    }
}

export class InputQuestion {

    label: string;
    type: InputQuestionType = "string";
    placeholder: string

    constructor(label: string, type: InputQuestionType = "string", placeholder: string = "") {
        this.label = label;
        this.type = type;
        this.placeholder = placeholder;
    }
}

export type InputQuestionType = "string" | "number"