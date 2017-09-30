import { Meteor } from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class App extends React.Component {
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

Meteor.startup(() => {
	render(<App />, document.getElementById('render-target'));
})

// add this to your meteor client
Meteor.startup(() => { 
	var url = new URL(document.location.href);
	var platform = url.searchParams.get('platform');
	ons.platform.select(platform);
	function KeyPress(e) {
	      var evtobj = window.event? event : e
	      if (evtobj.keyCode == 84 && evtobj.ctrlKey) 
	      	window.open('http://lucnaterop.github.io/onsen-tuktuk');
	}
	document.onkeydown = KeyPress
});
			
