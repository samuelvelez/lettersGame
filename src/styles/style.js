
import {
  StyleSheet, Dimensions
} from 'react-native';

const win = Dimensions.get("window").width;
const myStyle = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    clearBtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin:20
    },
    buttons:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    letter:{
        backgroundColor: "orange",
        borderColor: "#FF0000",
        borderWidth: 2,
        borderRadius: 10,
        width:'20%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'2%'
        

    },
    textLetter:{
        color:"#FFF",
        fontSize:40,
    },
    clear: {
        color: '#777',
        padding:20
    },
    icono:{
        color:"#FFF",
        backgroundColor: "#777",
        width:40,
        height:40,
        borderRadius:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    },
    textfield:{
        borderWidth:2,
        borderColor:"#ccc",
        padding:20,
        margin:20,
        fontSize:40,
        color: "#00FF00"

    },
    green:{
        backgroundColor:"#00FF00",
        borderColor:"#00FF00",
    },
    wrong:{
        color:"#FFFF00",
    }

  });

  export { myStyle }