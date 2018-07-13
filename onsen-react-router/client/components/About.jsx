
import { Meteor } from 'meteor/meteor';
import React from "react";

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Toolbar from './Toolbar';

export default class About extends React.Component {

  render() {
    return (
      <Ons.Page renderToolbar={() => <Toolbar />} contentStyle={{padding: 10}}>
        <h2>About</h2>
      </Ons.Page>
    );
  }
}
