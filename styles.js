import { ImageBackground, StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    container: {
   flex:1,
    //   justifyContent:'center',
    //   alignItems:'center',
        backgroundColor:'green'
    },
    TextStyle:{
        fontWeight:'bold',
        fontSize:26,
       backgroundColor:'white',
       borderColor:'green',
       borderWidth:10,
       padding:10,
       borderStartColor:'orange'

    },
    ButtonStyle: {
        backgroundColor: 'rgb(174, 168, 211);, 1',
        padding: 18,
        borderRadius: 8,
        borderWidth: 1,
        width: 250,
        alignItems: 'center'
    
      },
      ViewStyle: {
        flex: 1,
        
        backgroundColor: 'rgb(205, 209, 228);, 1',
    
      },

  SaveAreaViewStyle: {
    flex: 1,
    backgroundColor: 'rgb(34,139,34)'
  },
  TextStyle: {
    fontSize: 32,
    alignSelf: 'center',
    fontWeight: 'bold',
 marginTop:45,
    alignSelf:'center'
  },
  imageDesing:{
    height:200,
    width:'100%',
    
  }

})
export default styles;

