import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class SecondPage extends React.Component {
  
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  render() {
    return (
      <Ons.Page>
        <Ons.Toolbar>
          <div className="left"><Ons.BackButton>Back</Ons.BackButton></div>
          <div className="center">Another page</div>
        </Ons.Toolbar>
        <p> adslj </p>
        <p> &nbsp; </p>
        <p style={{textAlign: 'center'}}>
          <Ons.Button onClick={this.pushPage.bind(this)}>Push page</Ons.Button>
          <Ons.Button onClick={this.popPage.bind(this)}>Pop page</Ons.Button>
        </p>
      </Ons.Page>
    );
  }
}
