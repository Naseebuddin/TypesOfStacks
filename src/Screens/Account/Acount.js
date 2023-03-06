import React from "react";
import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";
import AccountComponent from "../../Component/AccountComponent";
import imagePath from "../../contants/imagePath";
import { engAccount } from "../../contants/lang/en";


import styles from "./styles";
export default function Acount() {
  return (
    <SafeAreaView style={{ ...styles.SaveAreasStyle,flex:1 }}>
      <View style={{ backgroundColor: "rgb(255,255,255)" ,flex:1}}>
        <View style={styles.ViewStyling}>
          <Text style={styles.TextHeadStyling}>Account</Text>
        </View>
        <ScrollView>
          <AccountComponent
            buttonText={engAccount.flikarZOne}
            iconeOfButton={imagePath.cart}
          />
          <AccountComponent
            buttonText={engAccount.myOrder}
            iconeOfButton={imagePath.home}
          />
          <AccountComponent
            buttonText={engAccount.myWishlist}
            iconeOfButton={imagePath.heart}
          />
          <AccountComponent
            buttonText={engAccount.studioCreator}
            iconeOfButton={imagePath.order}
          />
          <AccountComponent
            buttonText={engAccount.bankCrad}
            iconeOfButton={imagePath.play}
          />
          <AccountComponent
            buttonText={engAccount.myWallet}
            iconeOfButton={imagePath.voucher}
          />
          <AccountComponent
            buttonText={engAccount.flikarZOne}
            iconeOfButton={imagePath.cart}
          />
          <AccountComponent
            buttonText={engAccount.studioCreator}
            iconeOfButton={imagePath.home}
          />
          <AccountComponent
            buttonText={engAccount.myWishlist}
            iconeOfButton={imagePath.heart}
          />
          <AccountComponent
            buttonText={engAccount.studioCreator}
            iconeOfButton={imagePath.order}
          />
          <AccountComponent
            buttonText={engAccount.bankCrad}
            iconeOfButton={imagePath.play}
          />
          <AccountComponent
            buttonText={engAccount.myWishlist}
            iconeOfButton={imagePath.voucher}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
