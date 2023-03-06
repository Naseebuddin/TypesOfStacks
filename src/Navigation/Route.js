import react from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home/Home";
import navigationString from "./navigationString";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Acount from "../Screens/Account/Acount";
import Catagories from "../Screens/Catagories/Catagories";
import Notifications from "../Screens/Notifications/Notifications";
import Cart from "../Screens/Cart/Cart";
import imagePath from "../contants/imagePath";
import styles from "./styles";



export default function Route() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={navigationString.HOME}
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={imagePath.home}
                  style={{ ...styles.iconeStyle }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.CATAGORIES}
          component={Catagories}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ ...styles.iconeStyle }}
                  source={imagePath.iconCatagories}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.NOTIFICATIONS}
          component={Notifications}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ ...styles.iconeStyle }}
                  source={imagePath.NotificationImage}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.ACOUNT}
          component={Acount}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  style={{ ...styles.iconeStyle }}
                  source={imagePath.account}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name={navigationString.CART}
          component={Cart}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <Image
                  source={imagePath.cart}
                  style={{ ...styles.iconeStyle }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
