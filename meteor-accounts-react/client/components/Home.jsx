
import { Meteor } from 'meteor/meteor';
import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <button><Link to="/login">Go to login</Link></button>
      </div>
    );
  }

}
