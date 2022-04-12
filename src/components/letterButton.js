import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import {myStyle} from './../styles/style.js'
import board from './../../files/test-board-2.json';

var pressed = ''

function change(){
    pressed = myStyle.green
}
function LetterButton(props) {
    //if(props.word.includes(props.item)){
        var array = board.board;
        var index = array.indexOf(props.item);
    if(props.selectedItems.includes(props.number)){
        pressed = myStyle.green
    }else{
        pressed= ''
    }

  return (
      
    <TouchableOpacity onPress={props.link} onPressIn={()=>change} style={[myStyle.letter, pressed]}>
      <Text style={myStyle.textLetter}>{props.item}</Text>
    </TouchableOpacity>
  )
}


export default LetterButton