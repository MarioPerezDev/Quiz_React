import React from 'react';
import {reset} from './redux/actions'


export default class Navbar extends React.Component {
render() {
return (
	<nav className="bar">
	<button
	className="navbutton"
	onClick={(e) => {this.props.dispatch(reset())
			window.location.reload()
		}}>
	{this.props.text}
	</button>
	</nav>
);
}
}