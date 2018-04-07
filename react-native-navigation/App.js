/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Na from 'native-base';

class HomeScreen extends Component<Props> {
	
	static navigationOptions(navigation){
		return { title: 'Home' }
	}

  render() {
  console.disableYellowBox = true;
  console.log(this.props.navigation)
    return (
    	<Na.Container>
    		<Na.Content padder>
    			<Text>Watup</Text>
          <Na.Button style={{marginTop: 10}} onPress={() => {this.props.navigation.navigate('Profile')}}>
            <Na.Text >Go to Profile </Na.Text>
          </Na.Button>
    		</Na.Content>
    	</Na.Container>
    );
  }
}

class ProfileScreen extends Component<Props> {

  static navigationOptions = {
    title: 'Profile',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
    	<Na.Container>
    		<Na.Content padder>
    			<Text>Lorem ipsum</Text>
    		</Na.Content>
    	</Na.Container>
    );
  }
}

const NavigationStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
	initialRoute: 'Home'
});

export default class App extends React.Component {
	render() {
		return <NavigationStack />
	}
}