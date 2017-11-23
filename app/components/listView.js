import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    View, 
    StyleSheet,
    textDecorationColor } from 'react-native';

    
const users = [
    {name: 'John doe'},
    {name: 'Mpho doe'},
    {name: 'John Moses'},
    {name: 'Thabo doe'},
    {name: 'John Thelo'},
    {name: 'John Lesang'}
    ,
]

//make sure that all the data is send to the right packages

export default class listView extends Component {
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user,serctionId, rowId, highlightRow){
        return(
         <View style={styles.row}>
            <Text style={styles.rowText}>{user.name}</Text>
         </View>
        );
    }
  render(){
    return(
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
     />
    
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'column',
        justifyContent: 'center',
        padding:10,
        backgroundColor: 'black',
        marginBottom:3,
        textDecorationColor: 'white'
    },
    rowText:{
        flex:1,
      //  textColor: 'white'
    }
});