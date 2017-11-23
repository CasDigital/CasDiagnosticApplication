import React, {Component} from 'react';

import { StyleSheet, 
        AppRegistry, 
        Text, 
        View, 
        Button,
        Switch } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import {MainScreenNavigator} from './tabNavigator'
import {ChatScreen} from './navigationViews'



  export default class App extends Component {

      render() {
        return <SimpleApp />;
      }
    }

class NavigatorWrappingScreen extends Component {
    render() {
      return (
        <View>
          <Switch
          />
          <MainScreenNavigator navigation={this.props.navigation}/>
        </View>
      );
    }
  }
  NavigatorWrappingScreen.router = MainScreenNavigator.router;

  const SimpleApp = StackNavigator({
    Home: { screen: NavigatorWrappingScreen },
    Chat: { screen: ChatScreen },
  });


