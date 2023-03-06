import React, { useState } from "react";
import { Text ,TouchableOpacity,View,StyleSheet} from "react-native";

export default function ButtonWithHooks(){

    const [color , setColor] = useState(false);

   const handleClick = () => {
    setColor(!color)



    }

    
    return(
        <View>
            <TouchableOpacity
             onPress={()=>{handleClick()}}
              style={{backgroundColor: color ? "green" :'white',
              height:50,justifyContent:'center'}}>
                <Text>
                    Click
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    ButtonStyle:{
        backgroundColor:'green',
        height:40,alignItems:'center',
        justifyContent:'center'

    }
})