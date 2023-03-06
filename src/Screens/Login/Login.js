import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import navigationString from "../../Navigation/navigationString";

import InputComponent from "./../../component/InputComponent";
navigationString;

export default function Login({ navigation }) {
  const goToScreen = () => {
    navigation.navigate(navigationString.HOME, {
      title: "hello wolrd",
      name: "Naseebuddin",
      nameTwo: getName,
    });
  };

  const [getName, setGetName] = useState("");
  return (
    <View>
      <Text onPress={goToScreen}>click</Text>
      <InputComponent
        placeHolderValue={"Enter name"}
        onChangeGetValue={(value) => setGetName(value)}
      />
      <InputComponent placeHolderValue={"Enter your email"} />
    </View>
  );
}
