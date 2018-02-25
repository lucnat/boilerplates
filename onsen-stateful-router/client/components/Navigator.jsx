import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import MainPage from './MainPage';

export default class Navigator extends React.Component {
  constructor(props) {
    super(props);
    const routeConfig = Ons.RouterUtil.init([{
        component: MainPage,
        props: {
          navigator: {
            pushPage: (...args) => this.pushPage(...args)
          }
        }
    }]);
    this.state = {routeConfig};
  }

  pushPage(page) {
    const route = {
      component: page,
      props: {
        key: this.props._id || Random.id(),
        navigator: {
          popPage: () => this.popPage(),
          pushPage: (...args) => this.pushPage(...args)
        }
      }
    };

    let routeConfig = this.state.routeConfig;

    routeConfig = Ons.RouterUtil.push({
      routeConfig,
      route
    });

    this.setState({routeConfig});
  }

  popPage(options = {}) {
    let routeConfig = this.state.routeConfig;

    routeConfig = Ons.RouterUtil.pop({
      routeConfig,
      options: {
        ...options,
        animationOptions: {duration: 0.4}
      }
    });

    this.setState({routeConfig});
  }

  onPostPush() {
    const routeConfig = Ons.RouterUtil.postPush(this.state.routeConfig);
    this.setState({routeConfig});
  }

  onPostPop() {
    const routeConfig = Ons.RouterUtil.postPop(this.state.routeConfig);
    this.setState({routeConfig});
  }

  renderPage(route, navigator) {
    const props = route.props || {};
    props.key = props.key ? props.key : Random.id();
    return <route.component {...props} />;
  }
  
  render() {
    return (
      <Ons.Page>
        <Ons.RouterNavigator
          animation={this.props.animation}
          swipeable={true}
          swipePop={options => this.popPage(options)}
          routeConfig={this.state.routeConfig}
          renderPage={this.renderPage}
          onPostPush={() => this.onPostPush()}
          onPostPop={() => this.onPostPop()}
        />
      </Ons.Page>
    );
  }
}
