import Meteor from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';


class AccountsUIWrapper extends React.Component {
  componentDidMount() {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    Blaze.remove(this.view);
  }
  render() {
    return <span ref="container" />;
  }
}



export default class Profile extends React.Component {
	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className="center">Todos</div>
			</Ons.Toolbar>
		);
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar} contentStyle={{padding: 20}}>
				<h1> Profile </h1>
				<AccountsUIWrapper />
			</Ons.Page>
		);
	}
}

 
