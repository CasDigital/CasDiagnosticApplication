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
    ScrollView,
    ToolbarAndroid,
     } from 'react-native';
   
import Card from '../components/Card';
import Toolbar from '../components/Toolbar';



//Overview screen displays counts of all the system faults
export default class  overviewScreen extends Component {
 
    static navigationOptions = {
        drawerLabel: 'Overview',
        };

    render() {

        
      return (
        <View>

        <Toolbar heading = 'Overview Screen'/>
        
        <ScrollView>

            <View style={{flexWrap: 'wrap', flexDirection: 'row',backgroundColor: '#f3f3f3'}}> 
            
                    <Card faultCount = '100' systemName = 'Main Power System' screen = 'SubSystemOverview'/>
                    <Card faultCount = '30' systemName = 'Auxilliary System'/>
                    <Card faultCount = '100' systemName = 'Propulsion System'/>
                    <Card faultCount = '30' systemName = 'Braking System'/>
                    <Card faultCount = '20' systemName = 'Pneumatic System'/>
                    <Card faultCount = '60' systemName = 'Trainline System'/>

            </View>
        </ScrollView>
    
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

cardstyle:{
    height: 150,
    width: 150,
    marginTop: 15, 
    marginLeft: 15, 
    marginBottom: 15, 
    marginRight:15
}


};

//Styling for images
const imageStyles = {

    imageSize: {
        width: 15,
        height: 15,
    },
    
    inconImageSize: {
        width: 15,
        height: 15,
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
        fontSize: 80,
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
      },

      bottomPanelPosition: {
        flexDirection: 'column',
        justifyContent: 'bottom',
        alignItems: 'center'
      }

};
// style={[btnStyle, this.props.style]}
