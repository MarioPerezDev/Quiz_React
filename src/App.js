import React, { useEffect } from "react";
import './App.css';
import { connect } from 'react-redux';
import Game from './Game';
import Navbar from './Navbar';
import Spinner from 'react-bootstrap/Spinner'


import {questionAnswer, initQuestions} from './redux/actions'

function App(props) {
	

	useEffect(() => {fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=980db25f20d79702553d')
	.then((response) => {
    	return response.json()
    })
    .then((recurso) => {
    	props.dispatch(initQuestions(recurso))
    })},[])
   

   if(props.questions.length === 0)
   	return(
   		<div className="spin">
	   		<Spinner animation="border" role="status">
	 		 <span className="sr-only">Loading...</span>
			</Spinner>
		</div>)
   		else	
return (
<div>
<Navbar 
dispatch={props.dispatch}
text="Quiz App" />

<div className="App container">

<Game

question={props.questions[props.currentQuestion]}
onQuestionAnswer={(answer)=>{
props.dispatch(questionAnswer(props.currentQuestion , answer))
}} />


</div>
</div>

);
}

function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(App);

