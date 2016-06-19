import React from 'react';
import Card from 'material-ui/Card/Card';
import CardText from 'material-ui/Card/CardText';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import Actions from '../actions';

class Login extends React.Component {

	onClick() {
		Actions.login();
	}

	render() {
		return (
			<Card style={{
				'maxWidth': '800px',
				'margin': '30px auto',
				'padding': '50px'
			}}>
				<CardText style={{
					'textAlign': 'center'
				}}>
					To start chatting away, please log in with your Google account
				</CardText>

				<RaisedButton style={{
					display: 'block'
				}} 
				onClick={this.onClick.bind(this)} 
				label="Log in with Google"
				primary={true}>
				</RaisedButton>

			</Card>
		);
	}
}

module.exports = Login;