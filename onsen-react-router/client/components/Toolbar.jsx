
import { Meteor } from 'meteor/meteor';
import React from "react";
import { withRouter } from 'react-router';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class Toolbar extends React.Component {
  render() {
    return (
      <Ons.Toolbar>
        <div className="left">
          <Ons.BackButton onClick={() => {this.props.history.goBack()}}>
            Back
          </Ons.BackButton>
        </div>
        <div className="center">My App</div>
        <div className="right">
          <Ons.ToolbarButton>
            <Ons.Icon icon='ion-navicon, material:md-menu'></Ons.Icon>
          </Ons.ToolbarButton>
        </div>
      </Ons.Toolbar>
    );
  }
}

export default withRouter(Toolbar)
