
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { BrowserRouter, Route, Link, Redirect, withRouter, Switch} from 'react-router-dom';

// for all users
import Home from './Home';
import Login from './Login';

// for logged in users
import Profile from './Profile';

export let AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
);

const PublicNavbar = () => (<div style={{height: 50, borderBottom: '1px solid black'}}> Navbar </div>);
const AuthenticatedNavbar = () => (<div style={{height: 50, borderBottom: '1px solid black'}}> Authenticated Nav </div>);

class PublicLayout extends React.Component {
  render() {
    return (
      <div>
        {Meteor.user() ? <AuthenticatedNavbar/> : <PublicNavbar />}
        {this.props.children}
      </div>
    );
  }
}

class AuthenticatedLayout extends React.Component {

  render() {
    // if user
    if(Meteor.user()) return (
      <div>
          <AuthenticatedNavbar />
          {this.props.children}
      </div>
    );
    
    // maybe still loading the user
    else if (localStorage.getItem('loggedIn')) return (
      <div>
        <p>loading...</p>
      </div>
    );
    
    // definitely no user
    window.location.pathname='/login';
    return (
      <div>
        <p>Redirecting to login...</p>
      </div>
    );

  }
}

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          // public routes
          <AppRoute exact path="/" layout={PublicLayout} component={Home} />
          <AppRoute exact path="/login" layout={PublicLayout} component={Login} />

          // logged in routes
          <AppRoute exact path="/profile" layout={AuthenticatedLayout} component={Profile} />
        
        </Switch>
      </BrowserRouter>
    );
  }
}

export default withTracker(props => {
  return {
    user: Meteor.user()
  }
})(Router);
