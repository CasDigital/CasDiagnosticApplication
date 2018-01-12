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
    ScrollView
     } from 'react-native';
   
import Card from '../components/Card';
import faultJson from '../screens/faultsEventsList.json'
import Toolbar from '../components/Toolbar';

//make sure that all the data is send to the right pakages
export default class faultListScreen extends Component {

    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})
        this.state = {
            userDataSource: ds.cloneWithRows(faultJson),
        };
    }

    renderRow(faultJson,serctionId, rowId, highlightRow){
        return(
         <View style={styles.row} onPress={() => console.log("notes tapped!")}>
            <Text style={styles.rowText}>{faultJson.DateTime}</Text>
            <Text style={styles.rowText}>{faultJson.ClassificationCode}</Text>
            <Text style={styles.rowText}>{faultJson.Describtion}</Text>
         </View>
        );
    }

  render(){
   

    return(
    <View>
        
        <Toolbar heading = 'Fault List Screen'/>


    <ScrollView>

      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}/>

    </ScrollView>

    </View>
    
    );
  }
}


//MAKE suer that a universal module is created for styling.
const styles = {
    row: {
        flexDirection:'row',
        justifyContent: 'center',
        padding:5,
        backgroundColor: 'white',
        marginBottom:10,
       // color: 'black'
    },
    rowText:{
        flex:1,
      //  textColor: 'white'
    }
};

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
