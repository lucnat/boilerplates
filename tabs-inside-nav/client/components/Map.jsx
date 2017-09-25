import Meteor from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import { compose } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, OverlayView } from "react-google-maps";

import AddLot from './AddLot.jsx';


class Marker extends React.Component {

	handleClick() {
	}

	render() {
		var lot = this.props.lot;
		return (
			<OverlayView 
				position={lot.geolocation} 
				mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
				> 
				<Ons.Icon icon='ion-model-s' style={{fontSize: 30}} onClick={this.handleClick.bind(this)}/>
			</OverlayView>
		)
	}

}

const MapWithAMarker = compose(
  withScriptjs,
  withGoogleMap
)(props => {
	var markers = props.parkingLots.map(lot => <Marker lot={lot} key={lot._id} />);
	return (
		<GoogleMap defaultZoom={13} defaultCenter={{'lat': 47.371610,'lng': 8.543323}} >
			{markers}
		</GoogleMap>
	);
});


class ParkingLotsMap extends React.Component {

	handleAddLot() {
		this.props.navigator.pushPage({'component': AddLot }, {'animation': 'lift'});
	}

	renderToolbar() {
		return (
			<Ons.Toolbar>
				<div className='center'>Map</div>
				<div className='right'>
					<Ons.ToolbarButton onClick={this.handleAddLot.bind(this)}>
						<Ons.Icon icon='ion-plus, ion-plus'></Ons.Icon>
					</Ons.ToolbarButton>
				</div>
			</Ons.Toolbar>
		);
	}

	onMarkerClick(){
		alert('oi dickhead');
	}

	render() {
		return (
			<Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
				<MapWithAMarker
				  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				  loadingElement={<div style={{ height: '100%' }} />}
				  containerElement={<div style={{ height: '100%' }} />}
				  mapElement={<div style={{ height: '100%' }} />}
				  parkingLots={this.props.parkingLots}
				/>
			</Ons.Page>
		);
	}
}


export default createContainer(() => {
	return {
		parkingLots: ParkingLots.find({}).fetch(),
	};
}, ParkingLotsMap);


