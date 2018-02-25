import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import SecondPage from './SecondPage';

export default class MainPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formValue: '',
    }
  }
  render() {
    return (
      <Ons.Page contentStyle={{padding: 10}}>
        <Ons.Toolbar></Ons.Toolbar>
        <br/><br/><br/>
        <Ons.Button onClick={() => {this.props.navigator.pushPage(SecondPage)}}>
          Push page
        </Ons.Button> <br/> <br/>
        <Ons.Input placeholder="write something..." modifier="material" value={this.state.formValue} onChange={(e) => {this.setState({formValue: e.target.value})}} />
      </Ons.Page>
    );
  }
}
