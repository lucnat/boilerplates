import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Router from './components/Router'

import defineCollections from '/common/collections';

Meteor.startup(() => {
  defineCollections();
  render(<Router />, document.getElementById('react-target'));
});

Accounts.onLogin(() => {
  localStorage.setItem('loggedIn',true)
});

Accounts.onLogout(() => {
  localStorage.removeItem('loggedIn')
});
