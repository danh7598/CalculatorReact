/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      number1:0,
      number2:0,
      result:0
    }
  }
  onClickNumber = () => {
  };
  onClickCalculate = () => {

  };
  render() {
    return (
      <View style={styles.container}>
          <View style = {styles.top}>
              <Text style={styles.result}>
                  {this.state.number1}
                  </Text>
          </View>
          <View style = {styles.row}>
              <ButtonNumber text='C'/>
              <ButtonNumber text='±'/>
              <ButtonNumber text='%'/>
              <ButtonCalculate text='÷'/>
          </View>
          <View style = {styles.row}>
              <ButtonNumber text='7'/>
              <ButtonNumber text='8'/>
              <ButtonNumber text='9'/>
              <ButtonCalculate text='×'/>
          </View>
          <View style = {styles.row}>
              <ButtonNumber text='4'/>
              <ButtonNumber text='5'/>
              <ButtonNumber text='6'/>
              <ButtonCalculate text='-'/>
          </View>
          <View style = {styles.row}>
              <ButtonNumber text='1'/>
              <ButtonNumber text='2'/>
              <ButtonNumber text='3'/>
              <ButtonCalculate text='+'/>
          </View>
          <View style = {styles.row}>
              <TouchableOpacity style = {styles.zero}>
                  <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.button}>
                  <Text style={styles.text}>.</Text>
              </TouchableOpacity>
              <ButtonCalculate text='='/>
          </View>
      </View>
    );
  }
}
class ButtonNumber extends Component{
    render(){
        return(
            <TouchableOpacity
                style = {styles.button}
                onPress={this.onClickNumber}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}
class ButtonCalculate extends Component{
    render(){
        return(
        <TouchableOpacity
            style = {styles.buttonInRight}
            onPress={this.onClickCalculate}>
            <Text style={styles.text}>{this.props.text}</Text>
        </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top:{
      flex:1,
      borderColor:'gray',
      backgroundColor:'black',
      justifyContent:'flex-end',
      alignItems:'flex-end'
  },
  row: {
      flex:1,
      flexDirection:'row',
      borderColor:'gray',
  },
  button:{
      flex:1,
      borderWidth:1,
      borderColor:'gray',
      justifyContent:'center',
      alignItems:'center',
  },
  buttonInRight: {
      flex:1,
      borderWidth:1,
      borderColor:'gray',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'orange'
  },
  zero:{
      flex:2,
      borderColor:'gray',
      borderWidth:1,
      justifyContent:'center',
      alignItems:'center',
  },
  text:{
      fontSize:55,
      color:'black'
  },
  result:{
      fontSize:80,
      color:'white'
  }
});