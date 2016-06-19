import React from 'react';
import Channel from './Channel.jsx';
import Card from 'material-ui/Card/Card';
import List from 'material-ui/List/List';

class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			channels: [
				{key: 1, value:'Dogs'},
				{key: 2, value:'Cats'}
			]
		};
	}

	render() {
		var channelNodes = this.state.channels.map((channel) => {
			return(
				<Channel key={channel.key} channel={channel.value}/>
			);
		});

		return (
			<Card style={{
				flexGrow: 1
			}}>
				<List>
					{channelNodes}
				</List>
			</Card>
		);
	}
}

export default ChannelList;