import React, { Component } from 'react';
import {DrawerNavigator} from 'react-navigation'
import {StackNavigator} from 'react-navigation'
import startUpScreen from '../screens/startUpScreen'
import overviewScreen from '../screens/overviewScreen'
import intelligentDashboardScreen from '../screens/intelligentDashboard'
import subSystemOverview from  '../screens/subSystemOverviewScreen'
import faultListScreen from '../screens/faultListScreen'
import faultListScreenDb from '../screens/faultListScreenDb'


//need to create the stack navigator to be added on the drawer navigator. 


//Ensure that all the navigation routes are structured to be reconfigurable 
export default myNavigator = DrawerNavigator({
   
    startUpScreen: {
      screen: startUpScreen,

      navigationOptions: {
      
        initialRoute: true,        
        drawerLabel: 'StartUpScreen',
        Icon: "home"
  
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

//Only one drawer navigation is needed per application
  