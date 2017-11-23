
import React, { Component } from 'react';
import { 
    ActivityIndicator,
    AppRegistry, 
    Text, 
    View, 
    StyleSheet,
    Image,
    TouchableOpacity,
     } from 'react-native';

     import overViewScreen from '../screens/overviewScreen'

//This toolbar need to be replicated across all the other modules 
export default class Toolbar extends Component{
    static navigationOptions = {
        drawerLabel: 'toolbar',
        };

    render(){
        return(

        <View style={[panelStyles.containerStyle,
                {flexDirection: 'row', 
                height: 50},
                panelStyles.color]}>

             <TouchableOpacity 
             style= {{marginLeft: 20, marginRight: 20, marginTop: 15}} 
             onPress={() => props.navigation.navigate('DrawerOpen')} >   
                    <Image  source={require('./menuButton.png')} style = {[imageStyles.imageSize]}  />
                     
             </TouchableOpacity>

            <Text style={[textStyles.subheadingfont, {marginTop:10}]}>{this.props.heading}</Text>
        </View>

        );
    };

}

//Generic card styles
const panelStyles = {
    color: {
            backgroundColor: '#0091ea'
       },
   
   containerStyle: {

       shadowColor: '#A9A9A9',
       shadowOffset: { width: 0, height: 1 },
       shadowOpacity: 1,
       shadowRadius: 1.5,
       elevation: 10,

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

//Generic text styles
const textStyles = {
    
    headingfont: {
        fontSize: 30,
        color: 'white',
      },

    subheadingfont: {
        fontSize: 20,
        color: 'white',
      },

    
    cardNumber: {
        fontSize: 80,
        color: 'black',
      },
       
    cardText: {
        fontSize: 15,
        color: 'grey',
      },
    

    textPosition: {
        
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