import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputComponent({
  placeHolderValue = "",
  onChangeGetValue = "",
}) {
  return (
    <View>
      <TextInput
        style={{ ...styles.inputStyele }}
        placeholder={placeHolderValue}
        onChangeText={onChangeGetValue}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  inputStyele: {
    width: scale(200),
    height: moderateScale(90),
    borderWidth: 1,
  },
});
