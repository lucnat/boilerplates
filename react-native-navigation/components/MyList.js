
import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Platform, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import * as Na from 'native-base';





/*
export default class MyList extends React.Component {
  
  static navigationOptions(navigation){
    return { title: 'My Cards' }
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cards: [],
    }
  }

  componentDidMount() {
    fetch('http://159.89.16.187:3000/wellsapi/v1/wells')
    .then((response) => response.json()).then((r) => {
      if(r.status == 'error') alert(r.message);
      else {
        this.setState({
          loading: false,
          cards: r.data
        })
      }
    }).catch((error) => { console.error(error); });
  }

  renderRow(w) {
    return (
      <Na.ListItem onPress={() => this.props.navigation.navigate('WellsDetails', {_id: w._id})} >
        <Na.Left>
          <Na.Text>{w.title}</Na.Text>
        </Na.Left>
        <Na.Right>
          <Na.Icon name="arrow-forward" />
        </Na.Right>
      </Na.ListItem>
    );
  }

  render() {
    if(this.state.loading) return(
      <View style={{flex: 1, padding: 20}}>
        <ActivityIndicator/>
      </View>
    )
      return (
        <Na.Container>
          <Na.Content style={{backgroundColor: 'white'}}>
            <Na.List
              dataArray={this.state.cards} 
              renderRow={this.renderRow.bind(this)}
            />
          </Na.Content>
        </Na.Container>
      );
  }
}

*/