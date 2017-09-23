import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class AddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'text': '',
			'picture': ''
		}
	}
	onSave() {
		var task = this.state;
		task.owner = this.props.user.username;
		task.createdAt = new Date();
		Todos.insert(task);
		this.setState({
			'text': '',
			'picture': ''
		});
		ons.notification.toast('saved',{'timeout': 2000})	
	}
	render() {
		if(!this.props.user) {
			return <p style={{padding: 20}}> Login to add tasks </p>
		}
		return (
			<div style={{padding: 20}}>
				<Ons.Input
					placeholder="Text"
					modifier='underbar'
					value={this.state.text}
					onChange={e => {this.setState({'text': e.target.value})}}
				/> 
				<br />
				<Ons.Input
					placeholder="Image"
					modifier='underbar'
					value={this.state.picture}
					onChange={e => {this.setState({'picture': e.target.value})}}
				/>
				<br /> <br />
				<Ons.Button onClick={this.onSave.bind(this)}> Save </Ons.Button>
			</div>
		);
	}
}


export default createContainer(() => {
	return {
		user: Meteor.user(),
	};
}, AddTask);
