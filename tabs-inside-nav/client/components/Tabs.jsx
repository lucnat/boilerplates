import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Map from './Map.jsx';
import ParkingLotsList from './ParkingLotsList.jsx';
import Profile from './Profile.jsx';

export default class Tabs extends React.Component {

  renderTabs() {
    return [

      {
        content: <Map key={'tab1'} navigator={this.props.navigator} />,
        tab: <Ons.Tab key={'tab1'} label={'Map'} icon="ion-map"/>
      },
      {
        content: <ParkingLotsList key={'tab2'} navigator={this.props.navigator} />,
        tab: <Ons.Tab key={'tab2'} label={'List'} icon="ion-navicon-round" />
      },
      {
        content: <Profile key={'tab3'} navigator={this.props.navigator} />,
        tab: <Ons.Tab key={'tab3'} label={'Profile'} icon="ion-person" />
      }
    ];
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Tabbar
          initialIndex={0}
          renderTabs={this.renderTabs.bind(this)}
        />
      </Ons.Page>
    );
  }
}
