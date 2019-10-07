import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Tab1 from './Tab1.jsx';
import Tab2 from './Tab2.jsx';

export default class Tabs extends React.Component {

  renderTabs() {
    return [

      {
        content: <Tab1 key={'tab1'} navigator={this.props.navigator} />,
        tab: <Ons.Tab key={'tab1'} icon="ion-map"/>
      },
      {
        content: <Tab2 key={'tab2'} navigator={this.props.navigator} />,
        tab: <Ons.Tab key={'tab2'} icon="ion-navicon-round" />
      },
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
