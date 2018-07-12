import { Meteor } from 'meteor/meteor';
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Home from './Home';
import About from './About';

export default class Router extends React.Component{
  render() {
    return (
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </AnimatedSwitch>
      </BrowserRouter>
    );
  }
}
