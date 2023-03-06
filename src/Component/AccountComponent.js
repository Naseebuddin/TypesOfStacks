import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import styles from "../Screens/Account/styles";

export default AccountsComponent = ({
  iconeOfButton = "",
  buttonText = "",
}) => {
  return (
    <TouchableOpacity style={styles.accountComponentView}>
      <Image style={styles.accountComonentImagestyle} source={iconeOfButton} />
      <Text style={styles.ComponentTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
