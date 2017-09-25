import { Meteor } from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

ONS = ons

export default class ParkingLotDetails extends React.Component {

	renderToolbar(){
		return (
			<Ons.Toolbar>
				<div className='left'>
					<Ons.BackButton>Back</Ons.BackButton>
				</div>
				<div className='center'>
					{this.props.lot.name}
				</div>
			</Ons.Toolbar>
		);
	}

	handleDelete() {
		var that = this;
		ons.notification.confirm('Delete?', {callback: function(okChosen){
			if(okChosen) {
				console.log('ok chosen');
				ParkingLots.remove({'_id': that.props.lot._id});
				that.props.navigator.popPage();
			}	
		}})
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)} contentStyle={{padding: 20}}>
				<h2> Title: {this.props.lot.name} </h2>
				<p> Address: {this.props.lot.address} </p>
				<p> Owner: {this.props.lot.owner} </p>
				<Ons.Button onClick={this.handleDelete.bind(this)}> Delete </Ons.Button>
			</Ons.Page>
		);
	}
}