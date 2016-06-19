import React from 'react';
import Message from './Message.jsx';
import Card from 'material-ui/Card/Card';
import List from 'material-ui/List/List';
import Firebase  from 'firebase';
import _ from 'lodash';

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: {}
		};

		Firebase.database().ref('/messages/').on('child_added', (msg) => {
			if (this.state.messages[msg.key]) {
				return;
			}

			let msgVal = msg.val();
			msgVal.key = msg.key;
			this.state.messages[msgVal.key] = msgVal;
			this.setState({messages: this.state.messages});
		});

		Firebase.database().ref('/messages/').on('child_removed', (msg) => {
			var key = msg.key;
			delete this.state.messages[key];
			this.setState({messages: this.state.messages});
		});
	}

	render() {
		var messageNodes = _.values(this.state.messages).map((message, index) => {
			return(
				<Message key={message.key} message={message.message} avatar={message.profilePic}/>
			);
		});

		return (
			<Card style={{
				flexGrow: 2,
				marginLeft: 30
			}}>
				<List>
				{messageNodes}
				</List>
			</Card>
		);
	}
}

export default MessageList;