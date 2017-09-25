import Meteor from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import StripeCheckout from 'react-stripe-checkout';


class AccountsUIWrapper extends React.Component {
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  }
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  }
  render() {
    // Just render a placeholder container that will be filled in
    return <span ref="container" />;
  }
}


export default class Profile extends React.Component {

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Profile</div>
      </Ons.Toolbar>
    );
  }

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)} contentStyle={{padding: '20px'}}>
				<AccountsUIWrapper />
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_hTOEGUj2z98Ps85n2uXVgEC8"
        />
			</Ons.Page>
		);
	}
}