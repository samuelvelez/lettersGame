/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component }  from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Icon from 'react-native-vector-icons/Feather';
import board from './files/test-board-2.json';
import dict from './files/dictionary.json';

import {myStyle} from './src/styles/style.js'
import LetterButton from './src/components/letterButton';


//const App: () => Node = () => {
  
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      count: 0,
      text:"",
      textIsEmpty: true,
      styled:'',
      selectedArray:[]
    };

  }
  close=()=>{
    this.setState({
      text: "",
      textIsEmpty:true,
      selectedArray:[]
    })
  }
  
  selectNumber = (index,item) =>{
      var newArray = this.state.selectedArray;
      if(!this.state.selectedArray.includes(index)){ //verify if tile was pressed before
      newArray.push(index);

      //add item to textfield
      let actualText = this.state.text;
      this.setState({
        text: actualText+item,
        textIsEmpty:false,
        selectedItems:newArray
      })


      //verify if exists
      if(dict.words.find(element => element.toUpperCase() == actualText+item.toUpperCase())){
        this.setState({
          styled: ''
        })
      }else{
        this.setState({
          styled: myStyle.wrong
        })
      }
    }
  }
render(){

  const buttons = board.board.map( (item, index) => <LetterButton word={this.state.text} selectedItems={this.state.selectedArray} key={index} item={item} number={index} link={()=>this.selectNumber(index, item)}/>);
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={this.close} style={myStyle.clearBtn} disabled={this.state.textIsEmpty} >
              <Text style={myStyle.clear}>Clear Word</Text>
              <View style={myStyle.icono}>
                <Icon name="x" size={30}  />
              </View>
              
          </TouchableOpacity>
          <View style={myStyle.buttons}>
            {buttons}  
          </View>

          <TextInput editable={false} style={[myStyle.textfield, this.state.styled]} value={this.state.text} /> 
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};
}
  


//export default App;
