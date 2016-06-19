import React from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar/Avatar';

class Message extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ListItem 
				leftAvatar={<Avatar src={this.props.avatar} />}
			>{this.props.message}</ListItem>
		);
	}
}

export default Message;