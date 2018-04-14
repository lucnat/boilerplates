
import React from 'react';
import { StackNavigator } from 'react-navigation';
import * as Na from 'native-base';

class Welcome extends React.Component {

  static navigationOptions(navigation){
    return { title: 'Welcome' }
  }

  render() {
    return (
      <Na.Container>
        <Na.Content>

        </Na.Content>
      </Na.Container>
    );
  }
}

const NavigationStack = StackNavigator({
  'Welcome': {
    screen: Welcome,
  },
  }, {
    initialRoute: 'Welcome'
});

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return <NavigationStack />
  }
}
