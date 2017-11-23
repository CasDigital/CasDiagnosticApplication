import { 
    AppRegistry, 
    Text, 
    StyleSheet, 
    View, 
    Button 
} from 'react-native';

import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";


class RecentChatsScreen extends Component {
  render() {
    return (
        <View>
    <Text>List of recent chats</Text>
    <Button
    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
    title="Chat with Lucy"
   />
    </View>
    );
  }
}

class AllContactsScreen extends Component {
  render() {
    return (
        <View>
    <Text>List of all contacts</Text>
    <Button
    onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
    title="Chat with Lucy"
    />
    </View>
    );
  }
}

export const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

export default class tabApp extends Component {
    render() {
      return <MainScreenNavigator />;
    }
  }
  
  export { default as tabNavigator } from './tabNavigator';
