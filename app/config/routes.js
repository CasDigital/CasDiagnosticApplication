import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation'
import startUpScreen from '../screens/startUpScreen'
import overviewScreen from '../screens/overviewScreen'
import intelligentDashboardScreen from '../screens/intelligentDashboard'
import subSystemOverview from  '../screens/subSystemOverviewScreen'
import faultListScreen from '../screens/faultListScreen'
import faultListScreenDb from '../screens/faultListScreenDb'
import Icon from 'react-native-vector-icons/Ionicons';


//Navigation routes for the application
export default myNavigator = DrawerNavigator({
   
    startUpScreen: {
      screen: startUpScreen,

      navigationOptions: {
      
        initialRoute: true,        
        drawerLabel: 'StartUp Screen',
        Icon: "home"
        //icon: <ion-icon name="home"/>,
  
      },

    },

    Overview: {

      screen: overviewScreen,

      navigationOptions: {
        drawerLabel: 'Overview Screen',
      },
      
    },

    SubSystemOverview: {
      screen: subSystemOverview,

      navigationOptions: {
        drawerLabel: 'SubSystem Overview Screen',
      },
    },
    
    FaultList: {
        screen: faultListScreen,

        navigationOptions: {
          drawerLabel: 'Fault List Screen',
        },
      },

      FaultListDb: {
        screen: faultListScreenDb,

        navigationOptions: {
          drawerLabel: 'Fault List ScreenDb',
        },

      },


  });

  