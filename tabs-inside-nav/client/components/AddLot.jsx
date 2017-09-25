import { Meteor } from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class AddLot extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			address: '',
			size: '',
			latitude: '',
			longitude: ''
		}
	}

	handleNameChange(e){
		this.setState({name: e.target.value})
	}

	handleAddressChange(e){
		this.setState({address: e.target.value})
	}

	handleGetGeolocation(e){
		navigator.geolocation.getCurrentPosition( position => {
			this.setState({
				'latitude': ''+position.coords.latitude,
				'longitude': ''+position.coords.longitude
			})
		});
	}

	handleSave(){
		var that = this;
		var lot = {
			'name': this.state.name,
			'address': this.state.address,
			'size': this.state.size,
			'geolocation': {
				'lat': this.state.latitude, 
				'lng': this.state.longitude
			}
		}
		lot.owner = 'Luccel';
		ParkingLots.insert(lot, function(){
			that.props.navigator.popPage();
			ons.notification.toast('Yay!! Lot saved!', {timeout: 2000})
		});
	}

	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className='center'>Parking Lots</div>
				<div className='right'>
					<Ons.ToolbarButton onClick={() => {this.props.navigator.popPage()}}>
						<Ons.Icon icon='ion-close-round'></Ons.Icon>
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
	            <section style={{margin: '16px'}}>
					<h2> General Info </h2>
					<p>
						<Ons.Input style={{color: 'white', color: '#FFFF00'}}
							value={this.state.name}
							onChange={this.handleNameChange.bind(this)}
							modifier='underbar'
							float
							placeholder='Name of Lot' 
						/>
					</p>
					<p>
						<Ons.Input style={{color: 'white', color: '#FFFF00'}}
							value={this.state.address}
							onChange={this.handleAddressChange.bind(this)}
							modifier='underbar'
							float
							placeholder='Address of Lot' 
						/>
					</p>
					<h2> Geolocation </h2>
	            	<Ons.Button onClick={this.handleGetGeolocation.bind(this)}> Get Geolocation </Ons.Button>
					<p>
						<Ons.Input style={{color: 'white', color: '#FFFF00'}}
							value={this.state.latitude}
							onChange={(e) => {this.setState({'latitude': e.target.value})}}
							modifier='underbar'
							float
							placeholder='Latitude' 
						/>
					</p>
					<p>
						<Ons.Input style={{color: 'white', color: '#FFFF00'}}
							value={this.state.longitude}
							onChange={(e) => {this.setState({'longitude': e.target.value})}}
							modifier='underbar'
							float
							placeholder='Longitude' 
						/>
					</p>
	            	<Ons.Button onClick={this.handleSave.bind(this)}> Save </Ons.Button>
	            </section>
            </Ons.Page>
		);
	}

}