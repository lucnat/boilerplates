import { Meteor } from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import TodosList from './components/TodosList.jsx';
import Profile from './components/Profile.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {index: 0};
	}

	renderTabs() {
		return [
			{ tab: <Ons.Tab icon='ion-ios-list' key={0} />, content: <TodosList key={0}/>},
			{ tab: <Ons.Tab icon='ion-person' key={1} />,content: <Profile key={1} />}
		];
	}
	render() {
		return (
			<Ons.Tabbar
				position='auto'
				index={this.state.index}
				onPreChange={(event) => {
					if (event.index != this.state.index) {
						this.setState({index: event.index});
					}
				}}
				renderTabs={this.renderTabs.bind(this)}
			/>
		);
	}
}

Meteor.startup(() => {
	var url = new URL(document.location.href);
	var platform = url.searchParams.get('platform');
	ons.platform.select(platform);
	render(<App />, document.getElementById('render-target'));
});