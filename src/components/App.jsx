import React from 'react';
import reactCreateFragment from 'react-addons-create-fragment';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';

import blue500 from 'material-ui/styles/colors';
import blue700 from 'material-ui/styles/colors';
import blue100 from 'material-ui/styles/colors';
import pink400 from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';

const muiTheme = getMuiTheme({
  palette: {
	      primary1Color: blue500,
	      primary2Color: blue700,
	      primary3Color: blue100,
	      accent1Color: pink400
    },
});

@connectToStores
class App extends React.Component {
	constructor() {
		super();
	}

	static childContextTypes = {
	  muiTheme: React.PropTypes.object
	}

	getChildContext(){
		return {
		    muiTheme: muiTheme
		};
	}

	static getStores() {
		return [ChatStore];
	}

	static getPropsFromStores() {
		return ChatStore.getState();
	}

	render() {
		var view = <Login />;

		if (this.props.user) {
			view = (
				<div>
					<div style={{
						display: 'flex',
						flexFlow: 'row wrap',
						maxWidth: 1200,
						width: '100%',
						margin: '30px auto 30px'
						}}>
						<ChannelList/>
						<MessageList/>
					</div>
					<MessageBox/>
				</div>
			);
		}

		return (
			<div>
				<AppBar title="Awesome Chat App" />
				{view}
			</div>
		);
	}
}

export default App;