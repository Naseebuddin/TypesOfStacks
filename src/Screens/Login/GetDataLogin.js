import React, { useState } from "react";
import { Text,View } from "react-native";

const GetDataLogin = () => {

    let STOREGE_KEY = '@user_input';
    const [input, setInput] = useState('');

    const saveData = async () =>{
        try{
            await AsyncStorage.setItem(STOREGE_KEY. age)
            alert('Data successully saved ');
        }
        catch(e){

            alert('Failed to save the data to the storage ')
        }
    }
    const readData = async () => {
     

    }

    return(
        <View>
            <Text>
                getDataLogin
            </Text>
        </View>
    )
}
export default GetDataLogin;