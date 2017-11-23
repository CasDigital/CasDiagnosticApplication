import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    View, 
    StyleSheet,
    Image,
    button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Button
     } from 'react-native';
   
import Card from '../components/Card';
import faultJson from '../screens/faultsEventsList.json';
import axios from 'axios';

const BASE_URL = 'http://46.101.85.64:8888';
const myurl = `${BASE_URL}/sqldb`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default class  faultlistScreenDb extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }

    onPressButtonGET() {
        fetch({method: 'post',
        url: myurl,
        responseType: 'json',
        data: {
        app: "db_app",
        database_type: "sql",
        database_name: "deadsql",
        database_table: "testing",
        requesttype: "getRecord",
        requestdata: "all",
        params: "enforce_timeout"
          }})
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title = 'hello' onPress={() => this.onPressButtonGET()}/>
                <Card systemName =  {this.data}/>
            </View>
        );
    }
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
        marginRight: 5,
        marginLeft: 5,
    }
});
