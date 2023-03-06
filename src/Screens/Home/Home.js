import {
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Switch,
  FlatList,
  ScrollView,
} from "react-native";
import { Text, View, Image } from "react-native";
import TopButton from "../../Component/TopButton";
import imagePath from "../../contants/imagePath";
import React from "react";
import { useState } from "react";
import styles from "./styles";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { engHome } from "../../contants/lang/en";

export default function Home() {
  const superCoins = [
    { image: imagePath.coin, text: engHome.SuperCoins },
    { image: imagePath.voucher, text: engHome.Coupons },
    { image: imagePath.play, text: engHome.Plus },
    { image: imagePath.credit, text: engHome.Cridit },
    { image: imagePath.megaphone, text: engHome.whatsNew },
    { image: imagePath.add, text: engHome.Coupons },
  ];
  const recentlyItem = [
    {
      imageRecent: imagePath.recentItem,
      text1: engHome.ssd,
    },
    {
      imageRecent: imagePath.recentItem,
      text1: engHome.ssd,
    },
    {
      imageRecent: imagePath.recentItem,
      text1: engHome.ssd,
    },
    {
      imageRecent: imagePath.recentItem,
      text1: engHome.ssd,
    },
    {
      imageRecent: imagePath.recentItem,
      text1: engHome.ssd,
    },
    {
      imageRecent: imagePath.recentItem,
      text1: engHome.ssd,
    },
  ];

  const brandOfTheday = [
    {
      brandImage: imagePath.imageOne,
      brandText: engHome.brandText,
      brandOff: engHome.brandOff,
    },
    {
      brandImage: imagePath.imageOne,
      brandText: engHome.brandText,
      brandOff: engHome.brandOff,
    },
    {
      brandImage: imagePath.imageOne,
      brandText: engHome.brandText,
      brandOff: engHome.brandOff,
    },
  ];
  const [chnageColor, setChangeColor] = useState(false);
  const [ChnageGroceryColor, setChangeGroceryColor] = useState(false);

  const buttonColors = ()=>{
    if(!chnageColor)
    {
      setChangeColor(!!chnageColor)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView bounces={false} style={{}}>
          <View style={{ ...styles.mainView }}>
            <View style={{ ...styles.viewStyleTop }}>
              <TopButton
                buttonfontStyle={"italic"}
                buttonSize={scale(148)}
                buttonImage={imagePath.flipkartIcone}
                ButtonText={engHome.flipkart}
                onpressChnageColor={() => setChangeColor(!chnageColor)}
                buttonBackgroundCOlor={
                  chnageColor ? "#343638" : "rgb(255,255,255)"
                }
                buttonTextColor={
                  chnageColor ? "rgb(255,255,255)" : "rgb(0,0,0)"
                }
              />
              <TopButton
                buttonfontStyle={"italic"}
                buttonSize={scale(148)}
                ButtonText={engHome.grocery}
                buttonImage={imagePath.flipkartGr}
                onpressChnageColor={() =>
                  setChangeGroceryColor(!ChnageGroceryColor)
                }
                buttonBackgroundCOlor={
                  ChnageGroceryColor ? "rgb(0,128,0)" : "rgb(255,255,255)"
                }
                buttonTextColor={
                  ChnageGroceryColor ? "rgb(255,255,255)" : "rgb(0,0,0)"
                }
              />
            </View>

            <View style={{ ...styles.InputViewStyelingOutSide }}>
              <View style={{}}>
                <Text style={{ ...styles.textStyle }}>
                  {engHome.BrandMallSwitch}
                </Text>
                <Switch
                  style={{
                    borderRadius: 8,
                    transform: [
                      { scaleX: moderateScale(1.3, 0.2) },
                      { scaleY: moderateScale(0.6, 0.1) },
                    ],
                  }}
                  trackColor={{ false: "", true: "rgb(0,0,0)" }}
                />
              </View>
              <View style={{ ...styles.inputViewStyeling }}>
                <Image
                  style={{ ...styles.imageSyle }}
                  source={imagePath.search}
                />
                <TextInput placeholder={engHome.TextInputSearch} />
              </View>
            </View>
            <View>
              <Image
                resizeMode="stretch"
                style={{ ...styles.imageBannerStyle }}
                source={imagePath.imageOne}
              />
            </View>
            <View></View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={superCoins}
                renderItem={({ item }) => {
                  return (
                    <View>
                      <View style={{ ...styles.flitListViewStyle }}>
                        <Image
                          style={{ width: 38, height: 40 }}
                          source={item.image}
                        />
                      </View>
                      <Text style={styles.flatListTextStyling}>
                        {item.text}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <View style={{ ...styles.recentlyView }}>
              <View style={{}}>
                <Text style={styles.recentlyText}>{engHome.Recently}</Text>

                <Text
                  style={{
                    ...styles.recentlyText,
                    fontWeight: "300",
                    marginTop: 8,
                  }}
                >
                  {engHome.picked}
                </Text>
              </View>
              <View style={{ ...styles.viewAll }}>
                <TopButton
                  buttonBackgroundCOlor={"#2955e4"}
                  buttonSize={scale(85)}
                  ButtonText={"View All"}
                  fontSizeText={14}
                  buttonTextColor={"rgb(255,255,255)"}
                />
              </View>
            </View>
            <View>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recentlyItem}
                renderItem={({ item }) => {
                  return (
                    <View style={{ ...styles.recentViewItem }}>
                     
                      <Image
                        style={styles.recentlyViewItemImage}
                        source={item.imageRecent}
                      />
                      <Text style={styles.recentlyViewItemText}>
                        {item.text1}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <View style={styles.brandViewStyleing}>
              <Text style={styles.brandTextStyle}>
                {engHome.BrandsofTheDay}
              </Text>
              <Text style={{ ...styles.BigbrandTextStyle }}>
                {engHome.BigBrandsBigSaving}
              </Text>
              <FlatList
                horizontal
                data={brandOfTheday}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.brandinsidView}>
                      <Image
                        style={styles.brandImageStyle}
                        source={item.brandImage}
                      />
                      <View
                        style={{
                          backgroundColor: "rgb(0,0,0)",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Text style={styles.brandinsideText}>
                          {item.brandText}
                        </Text>
                        <Text style={styles.brandinsideText}>
                          {item.brandOff}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
              <FlatList
                horizontal
                data={brandOfTheday}
                renderItem={({ item }) => {
                  return (
                    <View style={{ ...styles.brandinsidView }}>
                      <Image
                        style={styles.brandImageStyle}
                        source={item.brandImage}
                      />
                      <View
                        style={{
                          backgroundColor: "rgb(0,0,0)",
                          alignItems: "center",
                          width: "100%",
                        }}
                      >
                        <Text style={styles.brandinsideText}>
                          {item.brandText}
                        </Text>
                        <Text style={styles.brandinsideText}>
                          {item.brandOff}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
