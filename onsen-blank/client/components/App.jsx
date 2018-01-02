import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class App extends React.Component {
	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className="center">My App</div>
				<div className="right">
					<Ons.ToolbarButton>
						<Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar}>
				<p style={{textAlign: 'center'}}>
					<Ons.Button onClick={this.handleClick}>
						Click me!
					</Ons.Button>
				</p>
			</Ons.Page>
		);
	}

	handleClick() {
		ons.notification.alert('Oi dickhead');
	}
}
