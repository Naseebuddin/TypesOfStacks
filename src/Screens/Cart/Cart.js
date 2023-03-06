import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Cart() {
  const [number, setNumber] = useState(0);
  useEffect(() => {
    return () => {};
  }, [number]);
  
  const getUserList = async () => {
    try {
      const res = await AsyncStorage.getItem("user");
      console.log("user lits +++++", JSON.parse(res));
    } catch (error) {
      console.log("error", error);
    }
  };
  const addUser = async () => {
    let user = [{ name: "Naseeb" }, { name: "GulShere" }, { name: "israr" }];
    try {
      const res = await AsyncStorage.setItem("user", JSON.stringify(user));
      alert("user Saved successfully ....");
    } catch (error) {
      console.log("error", error);
      alert("something is wrong ");
    }
  };
  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log("empty");
    }
  };
  return (
    <View
      style={{ alignContent: "center", justifyContent: "center", padding: 50 }}>
      <Text>Notifications</Text>
      <Button title="getUserList" onPress={getUserList} />
      <Button title="add users" onPress={addUser} />
      <Button title="remove " onPress={removeUser} />
      <Button title="getUserList" onPress={getUserList} />
      <Button title="add users" onPress={addUser} />
      <Button title="remove " onPress={removeUser} />
      <Text></Text>
    </View>
  );
}
