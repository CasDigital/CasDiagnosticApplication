import React, {Component} from 'react';

import { StyleSheet, 
        AppRegistry, 
        Text, 
        View, 
        Button } from 'react-native';

import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from "react-navigation";
import {MainScreenNavigator} from './tabNavigator'
import {MyHomeScreen} from './drawerNavigation'
import {MyNotificationsScreen} from './drawerNavigation'



export default MyApp = DrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Notifications: {
      screen: MyNotificationsScreen,
    },
    Main: {
        screen: MainScreenNavigator,
      },

    Hello: {
        screen: MainScreenNavigator,
      },

  });