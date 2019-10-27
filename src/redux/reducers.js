import { QUESTION_ANSWER, CHANGE_QUESTION,
	CHANGE_DIRECT_QUESTION,SUBMIT,
	INIT_QUESTIONS, CHECK,
	RESET, TIME } from './actions'

import { combineReducers } from 'redux';
	
function score(state = 0, action = {}) {
switch(action.type) {
	case SUBMIT:
	action.payload.questions.map((question,i) => {
if(question.answer === question.userAnswer){
	state ++
}})
	return state;
	case RESET:
	return 0;
default:
return state;
}
}
function time(state = 60, action = {}) {
switch(action.type) {
	case TIME:
	return state - 1
	case RESET:
	return 60;
default:
return state;
}
}
function finished(state = false, action = {}) {
switch(action.type) {
	case SUBMIT:
	return true
	case RESET:
	return false
default:
return state;
}
}
function currentQuestion(state = 0, action = {}) {
switch(action.type) {
	case CHANGE_QUESTION:
	return state + action.payload.index
	case CHANGE_DIRECT_QUESTION:
	return action.payload.index
	case RESET:
	return 0

default:
return state;
}
}
function questions(state = [], action = {}) {
switch(action.type) {
case QUESTION_ANSWER:
return state.map((question,i) => {
return { ...question,
userAnswer: action.payload.index === i ?
action.payload.answer : question.userAnswer
}
})
case INIT_QUESTIONS:
return action.payload.questions
case CHECK:
return state.map((question,i) => {
return { ...question,
done: ((action.payload.index === i) && (question.userAnswer))  ?
true : question.done
}
})
case RESET:
return []
default:
return state;
}
}
const GlobalState = (combineReducers({
score,
finished,
currentQuestion,
questions,
time,
}));




export default GlobalState;