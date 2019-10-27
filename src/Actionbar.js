import { connect } from 'react-redux';
import React from 'react';
import {changeQuestion, changeDirectQuestion, submit, check, reset, initQuestions} from './redux/actions'



export class Actionbar extends React.Component {
render() {
return (
<div className="buttons">
<div className="row">
	<div className="col-5">
		<button className="btn btn-dark float-left"
		disabled={this.props.currentQuestion === 0 ? true : false}
		onClick={(e) => {this.props.dispatch(changeQuestion(-1))
			this.props.dispatch(check(this.props.currentQuestion))
		}}>
		Anterior
		</button>

		<button className="btn btn-dark"
		onClick={(e) => {this.props.dispatch(reset());
			clearInterval(window.interval);
			fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=980db25f20d79702553d')
	.then((response) => {
    	return response.json()
    })
    .then((recurso) => {
    	this.props.dispatch(initQuestions(recurso))
    })			
		}}>
		Reset
		</button>

		
		<button 
		className="btn btn-dark float-right"
		disabled={this.props.currentQuestion === this.props.questions.length -1 ? true : false}
		onClick={(e)=> {this.props.dispatch(changeQuestion(1))
			this.props.dispatch(check(this.props.currentQuestion))}}>
		Siguiente
		</button>
		
	</div>
	<div className="col-7 submitArea">
<span className="align-middle">

	{
	this.props.questions.map((question,i)=>
	<button 
	className={`btn ${this.props.currentQuestion === i ? 'active': ''}
	${this.props.questions[i].done === true ? 'done': 'notdone'}`}
	onClick={(e)=> {this.props.dispatch(changeDirectQuestion(i))
	this.props.dispatch(check(this.props.currentQuestion))}}
	>{(i+1).toString()}</button>
	)}
	</span>
	
	
		<button 
		className="btn btn-primary float-right"
		onClick={(e)=> {this.props.dispatch(submit(this.props.questions))}}>
		Comprobar
		</button>
	</div>
</div>
</div>


);
}
}
function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(Actionbar);