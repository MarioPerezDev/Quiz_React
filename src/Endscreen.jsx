import React from 'react';
import {reset, initQuestions} from './redux/actions'



export default class Endscreen extends React.Component {
render() {
  let score = this.props.score;
  let finalmsg = "";
  switch(true) {
  	case (score < 5):
    finalmsg = "Vaya, parece que has suspendido, prueba otra vez";
    break;
    case(score < 7):
    finalmsg = "No está mal, obtienes un bien"
    break;
    case(score < 9):
    finalmsg = "¡Muy bien! Tu puntuación es notable"
    break;
    case(score < 11):
    finalmsg = "¡Eres el mejor!"
    break;
    default:
    finalmsg = "Nota final calculada"
  }


return (
  <div
  className="col-sm completed">
  <h1>Juego completado</h1>
  {finalmsg}
  <h2>Puntuación obtenida: {this.props.score}</h2>
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
  Volver a jugar
  </button>
	</div>
);
}
}
