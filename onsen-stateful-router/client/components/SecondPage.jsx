import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class SecondPage extends React.Component {
  render() {
    return (
      <Ons.Page contentStyle={{padding: 10}}>
        <Ons.Toolbar>
        	<div className="left">
        		<Ons.BackButton onClick={() => {this.props.navigator.popPage()}}>
        			Back
        		</Ons.BackButton>
        	</div>
        </Ons.Toolbar>
        <br/> <br/> <br/>
        <Ons.Button onClick={() => {this.props.navigator.popPage()}}>Pop page</Ons.Button>
      </Ons.Page>
    );
  }
}
