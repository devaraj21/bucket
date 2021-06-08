import React, {Component} from 'react';
import {Text,View,TextInput,StyleSheet,Image,ImageBackground, Button,TouchableOpacity} from 'react-native';
import CustomButton from './components/CustomButton';


export default class App extends Component {
  render() {
    return(
      <View style={{flex:1}}>
           <Image
          style={styles.profileLogo}
          source={{uri: 'https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png'}}
        />
       
        
        <View style={{flex:1,backgroundColor:'lightgreen',borderRadius:25,marginTop:0,marginBottom:0,marginLeft:20,marginRight:20}}>
             <TextInput style={{borderBottomWidth:1,margin:10,alignItems:'center',justifyContent:'center'}} placeholder='Enter Email'></TextInput>
             <TextInput style={{borderBottomWidth:1,margin:10,alignItems:'center',justifyContent:'center'}} placeholder='Enter password' secureTextEntry={true}></TextInput>
              {/* <CustomButton></CustomButton> */}
              <TouchableOpacity style={{marginHorizontal:10,backgroundColor:'#3cb371'}}>
                <Button title="LOGIN"></Button>
              </TouchableOpacity>
       </View>
     </View>
      
    )
    }
  }

  const styles = StyleSheet.create({
    profileLogo: {
      width: 50,
      height: 50,
      marginLeft:150,
      marginTop:100,
    },
  
  })
