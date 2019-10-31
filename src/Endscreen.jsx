import React from 'react';
import {reset, initQuestions} from './redux/actions'



export default class Endscreen extends React.Component {
render() {
  let score = this.props.score;
  let finalimg = "https://icon-library.net/images/not-found-icon/not-found-icon-28.jpg"
  let finalmsg = "";
  switch(true) {
  	case (score < 5):
    finalmsg = "Vaya, parece que has suspendido, prueba otra vez";
    finalimg = "http://www.requitix.io/mypics/max/69/697536_fail-stamp-png.png"
    break;
    case(score < 7):
    finalmsg = "No está mal, obtienes un bien"
    finalimg = "https://uploads.friendsresilience.org/wp-content/uploads/2017/01/23002444/Paula-Barrett-Thumbs-Up-Actions.jpg"
    break;
    case(score < 9):
    finalmsg = "¡Muy bien! Tu puntuación es notable"
    finalimg = "https://seekcomau.corewebdna.net.au/web_images/blogs/214/3751/Recruiters%20reveal%20their%20most%20impressive%20candidates%20ever_940x485.jpg"
    break;
    case(score < 11):
    finalmsg = "¡Eres el mejor!"
    finalimg = "https://cdn5.vectorstock.com/i/1000x1000/33/14/excellent-3d-gold-badge-with-red-ribbon-vector-9143314.jpg"
    break;
    default:
    finalmsg = "Nota final calculada"
  }


return (
  <div
  className="col-sm completed">
  <h1>Juego completado</h1>
  <p>{finalmsg}</p>
  	<img src={finalimg} alt="rank"/>
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
