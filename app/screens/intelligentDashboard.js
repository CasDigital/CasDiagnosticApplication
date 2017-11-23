import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    ListView, 
    Text, 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
     } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

 //Making sure all that all the data is deployed to the screen. 
export default class  intelligentDashboardScreen extends Component {

    static navigationOptions = {
        drawerLabel: 'Dashboards',
      };

    render() {
//need to figure out a way to postition the button
      return (
        <View style={{flex:1, backgroundColor: '#f3f2f3'}}>        
             <View style={[panelStyles.containerStyle,
                    {flexDirection: 'row', 
                    height: 50},
                    imageStyles.imagePosition,
                    panelStyles.color]}>
                

                  <Text style={textStyles.subheadingfont}>Intelligent Dashboards</Text>

            </View>

            <View>
                
            </View>


        </View>
      );
    }
  }


//MAKE suer that a universal module is created for styling.

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
        width: 35,
        height: 35,
    },
    
    inconImageSize: {
        width: 25,
        height: 25,
    },

    imagePosition: {
      
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

};

//Styling for that can be used be the styling for the all the images on the tool.
const actionButtonStyle = {
    
    actionButtonIcon: {
        buttonColor: 'rgba(231,76,60,1)',
      },
    popActionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
    
};
    
//Styling for that can be used for the text that is on the tool. 
const textStyles = {
    
    headingfont: {
        fontSize: 30,
        color: 'white',
      },

      subheadingfont: {
        fontSize: 20,
        color: 'white',
      },

    
    footerfont: {
        fontSize: 20,
        color: 'black',
      },

    imagePosition: {
        
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      },

      bottomImagePosition: {
        
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
      }

};
// style={[btnStyle, this.props.style]}
