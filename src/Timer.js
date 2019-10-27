import React from 'react';
import { connect } from 'react-redux';
import {time, submit} from './redux/actions'


export class Timer extends React.Component {
		componentDidMount(){

window.interval = setInterval(() => {
if (this.props.time === 1) clearInterval(window.interval);
this.props.time > 1 ?
this.props.dispatch(time()) : this.props.dispatch(submit(this.props.questions)); },1000,); 
  }
		
				
  
        
	
render() {
return (
	<div className="timer">
	<div>{this.props.text}</div>
	<p>{this.props.time}</p>
	</div>
);
}
}
function mapStateToProps(state) {
return {
...state
};
}
export default connect(mapStateToProps)(Timer);