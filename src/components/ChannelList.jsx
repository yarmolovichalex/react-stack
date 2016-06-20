import React from 'react';
import Channel from './Channel.jsx';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

import Card from 'material-ui/Card/Card';
import List from 'material-ui/List/List';
import CircularProgess from 'material-ui/CircularProgress/CircularProgress';

@connectToStores
class ChannelList extends React.Component {
	constructor(props) {
		super(props);
		ChatStore.getChannels();
	}

	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		return ChatStore.getState();
	}

	render() {
		if (!this.props.channels) {
			return (
				<Card style={{
					flexGrow: 1
				}}>
					<CircularProgess
						mode="indeterminate"
						style={{
							paddingTop: '20px',
							paddingBottom: '20px',
							margin: '0 auto',
							display: 'block',
							width: '60px'
						}}
					/>
				</Card>
			)
		}

		var channelNodes = _(this.props.channels)
			.keys()
			.map((k) => {
				let channel = this.props.channels[k];
				return(
					<Channel key={channel.key} channel={channel}/>
				);
			})
			.value();

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