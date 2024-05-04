import { Form, SingleSelectQuestion, MultipleInputQuestion, InputQuestion } from "../forms.config";

const questions = [];

export const question1 = new SingleSelectQuestion("¿Necesita una tarjeta de crédito para usar hoy? ¡Lo tenemos para ti!", "Se tarda menos de 30 segundos en ser aprobado", "¿Qué valor necesitas?");
question1.addOption("$ 1000,00");
question1.addOption("$ 2500,00");
question1.addOption("$ 5000,00");
question1.addOption("$ 10000,00");

export const question2 = new MultipleInputQuestion("¡Maravilloso! ¡Encontramos una excelente tarjeta de crédito con un límite para que la use hoy!", "Introduzca sus datos para ver la tarjeta de crédito que hemos encontrado.", "");
question2.addInputQuestion(new InputQuestion("Nombre", "string", "Juan Pablo"));
question2.addInputQuestion(new InputQuestion("Email", "string", "juan@gmail.com"));

questions.push(question1);

export const leadReportForm = new Form("lead-report", questions)