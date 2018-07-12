
import { Meteor } from 'meteor/meteor';
import React from "react";
import { Link } from "react-router-dom";

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

export default class Home extends React.Component {

  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className="center">My App</div>
        <div className="right">
          <Ons.ToolbarButton>
            <Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }

  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)} contentStyle={{padding: 10}}>
        <h2>Home</h2>
        <Link to="/about"><Ons.Button>Go to about</Ons.Button></Link>
      </Ons.Page>
    );
  }

}
