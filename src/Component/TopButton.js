import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function TopButton({
  buttonBackgroundCOlor = "",
  ButtonText = "",
  buttonImage = "",
  buttonTextColor = "",
  buttonSize = "",
  fontSizeText = "",
  onpressChnageColor = "",
}) {
  return (
    <View>
      <TouchableOpacity
        onPress={onpressChnageColor}
        style={{
          ...style.buttonStyle,
          width: buttonSize,
          backgroundColor: buttonBackgroundCOlor,
        }}
      >
        <Image style={{ ...style.ImageStyling }} source={buttonImage} />
        <Text
          style={{
            ...style.textStyle,
            color: buttonTextColor,
            fontSize: fontSizeText,
          }}
        >
          {ButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  ImageStyling: {
    height: moderateScale(20),
    width: scale(20),
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(40),
    borderWidth: 1,
    // width: scale(148),
    borderRadius: scale(8),
    flexDirection: "row",
    paddingLeft: moderateScale(5),
    padding: scale(5),
  },
  textStyle: {
    alignSelf: "center",
    fontWeight: "bold",
    marginRight: 12,
    paddingLeft: scale(8),
    fontStyle: "italic",
  },
});
