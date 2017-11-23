import { AppRegistry } from 'react-native';
import myNavigator from './app/config/routes';


const reactNavigationSample = props => {
    return <App navigation={props.navigation} />;
  };
  
reactNavigationSample.navigationOptions = {
    title: "Startup Screen"
  };
   



AppRegistry.registerComponent('ubuntuapp', () => myNavigator);

