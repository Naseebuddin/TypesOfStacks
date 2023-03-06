import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";
import imagePath from "../contants/imagePath";
import { engCatagories } from "../contants/lang/en";
import styles from "../Screens/Catagories/styles";

export default CatagoroesComponent = () => {
  const catagories = [
    {
      itemImage: imagePath.home,
      itemText: engCatagories.offerZOne
    },
    {
      itemImage: imagePath.imageOne,
      itemText: engCatagories.mobiles
    },
    {
      itemImage: imagePath.imagethree,
      itemText: engCatagories.electronics
    },
    {
      itemImage: imagePath.home,
      itemText: engCatagories.Home,
    },
  ];
  return (
    <View>
      <FlatList
        horizontal
        data={catagories}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
            <View style>
              <View style={styles.flatlistViewStyle}>
                <Image
                  style={styles.flatlistImageStyle}
                  source={item.itemImage}
                />
              </View>
              <Text style={styles.flatlistTextStyle}>{item.itemText}</Text>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
