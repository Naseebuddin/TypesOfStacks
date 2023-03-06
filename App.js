import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Route from "./src/Navigation/Route";
import GetDataLogin from "./src/Screens/Login/GetDataLogin";
// import AsyncStorage from '@react-native-community/async-storage';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Route />
      {/* <GetDataLogin/> */}
      
    </View>
  );
}
