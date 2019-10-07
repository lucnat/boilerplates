
// PAGE WITH TOOLBAR

import { Meteor } from 'meteor/meteor';
import React from 'react';
import ons from 'onsenui';
import * as Ons from 'react-onsenui';

export default class Page extends React.Component {
  
  renderToolbar() {
    return (
      <Ons.Toolbar>
        <div className='center'>Tab 2</div>
      </Ons.Toolbar>
    );
  }
  
  render() {
    return (
      <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
      </Ons.Page>
    );
  }
  
}
