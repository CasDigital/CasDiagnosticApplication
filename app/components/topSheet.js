import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    View, 
    StyleSheet,
    Image
     } from 'react-native';

export default class  topSheet extends Component {
    render() {
      return (
        <View style={[panelStyles.containerStyle,
                    {flexDirection: 'row', 
                    height: 300},
                    imageStyles.imagePosition,
                    panelStyles.color]}>
          
          <Image  source={require('./app_logo.png')} 
                  style = {[imageStyles.imageSize]} />
          </View>
        
      );
    }
  }
//Styling for topsheet
const panelStyles = {
 color: {
         backgroundColor: '#0091ea'
    },
 flex: {
        flexDirection: 'row',
        flex: 1,
        height: 300
   },
containerStyle: {
    borderWidth:0,
    borderRadius: 0,
    //borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#A9A9A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
  },
};

//Styling for images
const imageStyles = {

    imageSize: {
        width: 70,
        height: 70,
    },
    
    imagePosition: {
       // flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

