import React, {Component} from 'react';
import {Button,StyleSheet} from 'react-native';

const CustomButton = (props) => {
    return(
        <Button title="LoGIN" onPress={ () => props.onPress()}  style={Styles.button} />
    );
}

export default CustomButton;

const Styles = StyleSheet.create ({
  button:{
      flex:1,
      backgroundColor:'red',
      marginHorizontal:'20'
  }
})