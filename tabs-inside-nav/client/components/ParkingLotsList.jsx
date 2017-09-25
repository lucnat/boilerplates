import { Meteor } from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import ParkingLotDetails from './ParkingLotDetails.jsx';
import AddLot from './AddLot.jsx';

class ListElement extends React.Component {

	handleLotClick() {
		this.props.navigator.pushPage({
			'component': ParkingLotDetails,
			'props': {
				lot: this.props.lot,
				'_id': this.props.lot._id,
			}
		});
	}

	render() {
		var lot = this.props.lot;
		return (
			<Ons.ListItem key={lot._id} modifier="chevron" tappable onClick={this.handleLotClick.bind(this)}>
				<div className="center">
					<span className="list-item__title">{lot.name}</span>
					<span className="list-item__subtitle">{lot.address}</span>
				</div>
			</Ons.ListItem>
		);
	}

}

class ParkingLotsList extends React.Component {

	handleAddLot() {
		this.props.navigator.pushPage({'component': AddLot }, {'animation': 'lift'});
	}

	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className='center'>Parking Lots</div>
				<div className='right'>
					<Ons.ToolbarButton onClick={this.handleAddLot.bind(this)}>
						<Ons.Icon icon='ion-plus, ion-plus'></Ons.Icon>
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	renderRow(lot, index) {
		return (
			<ListElement lot={lot} key={index} navigator={this.props.navigator} />
		);
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)} >
				<Ons.List 
					dataSource={this.props.parkingLots}
					renderRow={this.renderRow.bind(this)}
				/>
			</Ons.Page>
		);
	}

}

export default createContainer(() => {
	return {
		parkingLots: ParkingLots.find({}).fetch(),
	};
}, ParkingLotsList);

