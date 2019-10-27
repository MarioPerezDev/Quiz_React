import React from 'react';
import Actionbar from './Actionbar';
import Content from './Content';
import { connect } from 'react-redux';

export class Game extends React.Component {
render() {
	var img1 = "https://icon-library.net/images/not-found-icon/not-found-icon-28.jpg"
	var img2= "https://icon-library.net/images/not-found-icon/not-found-icon-28.jpg"
	var author = "Anonimo"

if(this.props.question){
	if(this.props.question.attachment != null) {
		img1= this.props.question.attachment.url
	}
	
	if (this.props.question.author.photo !=null){
		img2=this.props.question.author.photo.url
	}

	if(this.props.question.author.username !=null){
		author = this.props.question.author.username
	}
}
	if(this.props.finished){
return(
<div 
className="col-sm completed">
<h1>Juego completado</h1>
<h2>Puntuación obtenida: {this.props.score}</h2>
</div>
)
	}else{
return (
	<div>


	<Content 

	imgurl={img1}
	finished={this.props.finished}
	authorName={author}
	authorImgUrl={img2}
	question={this.props.question}
	onQuestionAnswer={this.props.onQuestionAnswer}
	style= {{width:300, height:300}}
	/>	

	<Actionbar/>

	</div>
);
}
}
}
function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(Game);