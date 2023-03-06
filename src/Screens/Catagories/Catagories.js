import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import imagePath from "../../contants/imagePath";
import CotagoriesComponent from "../../Component/CotagoriesComponent";
import { engCatagories } from "../../contants/lang/en";
export default function Catagories() {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.ViewStyle}>
          <Text style={styles.allCotagoriesText}>{engCatagories.allCotagories}</Text>
          <TouchableOpacity>
            <Image style={styles.searchImageStyle} source={imagePath.search} />
          </TouchableOpacity>
        </View>
        <CotagoriesComponent/>
        <CotagoriesComponent/>
        <CotagoriesComponent/>
        <CotagoriesComponent/>
      </View>
    </SafeAreaView>
  );
}
