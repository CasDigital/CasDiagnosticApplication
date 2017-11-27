
import {DrawerNavigator} from 'react-navigation'
import startUpScreenmy from '../screens/startUpScreen'
import overviewScreen from '../screens/overviewScreen'
import intelligentDashboardScreen from '../screens/intelligentDashboard'
import subSystemOverview from  '../screens/subSystemOverviewScreen'
import faultListScreen from '../screens/faultListScreen'
import faultListScreenDb from '../screens/faultListScreenDb'


//Navigation routes for the application
export default myNavigator = DrawerNavigator({
   
    startUpScreenthis: {
      initialRoute: true,
      title: 'StartUp',
      screen: startUpScreenmy,
    },
    Overview: {
      title: 'Overview',
      screen: overviewScreen,
    },

    SubSystemOverview: {
      title: 'SubSystem Overview',
      screen: subSystemOverview
    },
    
    FaultList: {
        title: 'Fault List Screen',
        screen: faultListScreen,
      },

      FaultListDb: {
        title: 'Fault List Screen Db',
        screen: faultListScreenDb,
      },


  });

  