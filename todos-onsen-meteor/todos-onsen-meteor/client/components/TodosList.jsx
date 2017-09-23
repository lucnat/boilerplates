import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import AddTask from './AddTask.jsx';

class TodosList extends React.Component {
	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className="center">Todos</div>
				<div className="right">
					<Ons.ToolbarButton>
						<Ons.Icon icon='ion-navicon-round'></Ons.Icon>
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	render() {
		var todos = this.props.todos.map(todo => {
			return (
				<Ons.ListItem key={todo._id}>
					<div className='left'>
						<img src={todo.picture} className='list-item__thumbnail' />
					</div>
			        <span className="list-item__title">{todo.text}</span>
			        <span className="list-item__subtitle"> - von {todo.owner}</span>
				</Ons.ListItem>
			);
		});
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
				<AddTask />
				<Ons.List>
					{todos}
				</Ons.List>
			</Ons.Page>
		);
	}
}

export default createContainer(() => {
	return {
		todos: Todos.find().fetch(),
	};
}, TodosList);
