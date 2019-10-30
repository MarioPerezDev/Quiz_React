import React from 'react';
import Timer from './Timer';
import {changeQuestion, check} from './redux/actions'



export default class Content extends React.Component {
	constructor(props){
		super(props)
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	componentDidUpdate(){
    this.nameInput.focus();
  }

	handleKeyPress(target) {
  if(target.charCode==13){
		if(this.props.currentQuestion < this.props.length -1)
    this.props.dispatch(changeQuestion(1));
		this.props.dispatch(check(this.props.currentQuestion))
  }
}

render() {
	var a = this.props.question.tips.slice(0,3)
return (
<div>
	<div className="row">
		<div className="col-5 questionImg">
			<img src={this.props.imgurl} alt="loading"/>
		</div>


		<div className="col-7">
			<div className="row">
				<h1 className="questionTitle">
						Conteste a la siguiente pregunta:
					</h1>
				<div style={{paddingLeft:0}} className="col-3">
					<Timer
					text="Tiempo restante:" />
				</div>
				<div className="col-9">
					<div className="questionContainer">
						<div className="questionText">
						{this.props.question.question}:
						</div>

						<input
							onKeyPress={this.handleKeyPress}
							ref={(input) => { this.nameInput = input; }}
							autoFocus
							name="text"
							type="text"
							placeholder="Introduzca su respuesta"
							value={this.props.question.userAnswer || ''}
							onChange={(e)=>this.props.onQuestionAnswer(e.target.value)}
						/>

					</div>
				</div>
			</div>

			<div className="row">
				<div className="tipsContainer">
					<h3 className="tipsTitle">Tips para resolver la pregunta:
					</h3>
					<ul className="tipsList">
						{a.map((txt,i) => <li key={i}>{txt}</li>)}
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div className="row">
	<div className="authordata col-5">
				<div className="authorName" style= {{display: "inline-block"}}>
					Creador de la pregunta:
				<img className="authorImg" src={this.props.authorImgUrl} alt="loading">
				</img>
				{this.props.authorName}
				</div>
			</div>
	</div>

</div>
);
}
}
