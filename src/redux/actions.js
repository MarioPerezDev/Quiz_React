export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIIT_QUESTIONS';
export const CHANGE_DIRECT_QUESTION = 'CHANGE_DIRECT_QUESTION';
export const CHECK = 'CHECK';
export const RESET = 'RESET';
export const TIME = 'TIME';


export function questionAnswer(index, answer) {
	return { type: QUESTION_ANSWER, payload: { index, answer } };
}

export function check(index) {
	return { type: CHECK, payload: { index } };
}

export function time() {
	return { type: TIME};
}


//Cambia la pregunta que se muestra
export function changeQuestion(index){
	return { type: CHANGE_QUESTION, payload : {index}  };
}
/*
Finaliza el juego y evalúa las respuestas comparando
userAnswer con answer y mostrando la puntuación obtenida. También este cambia
finished a true.
*/
export function submit(questions){
	return { type: SUBMIT, payload:{questions} }
}
/*
Sobreescribe las preguntas del estado por
las que se indica en el argumento questions. Esta acción se utilizará al pedir las
preguntas del servidor
*/
export function initQuestions(questions){
	return { type: INIT_QUESTIONS, payload:{questions} }
}

export function changeDirectQuestion(index){
	return { type: CHANGE_DIRECT_QUESTION, payload : {index}  };
}

export function reset(){
	return { type: RESET };
}



