import { StyleSheet } from "react-native";
import React from "react";
import {
  scale,
  verticalScale,
  moderateScale,
  s,
} from "react-native-size-matters";

export default StyleSheet.create({
  viewStyleTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    flex:1
  },
  mainView: {
    backgroundColor: "white",
  },
  InputViewStyelingOutSide: {
    flexDirection: "row",
    marginLeft: moderateScale(20),
    marginTop: moderateScale(20),
  },
  inputViewStyeling: {
    flexDirection: "row",
    marginLeft: 40,
    borderWidth: 1,
    height: verticalScale(35),
    width: scale(235),
    padding: scale(5),
    borderRadius: 5,
  },
  switchViewStyleing: {
    margin: 20,
  },

  textStyle: {
    fontSize: 10,
  },

  imageSyle: {
    height: scale(22),
    width: verticalScale(22),
    marginTop: scale(4),
    marginRight: scale(5),
    padding: moderateScale(10),
  },
  imageBannerStyle: {
    height: scale(200),
    width: "100%",
    marginTop: 10,
  },

  flitListViewStyle: {
    marginTop: 20,
    backgroundColor: "#eff4ff",
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2,
  },
  flatListTextStyling: {
    padding: 5,
    alignSelf: "center",
    marginLeft: 5,
  },

  recentlyText: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 18,
    marginLeft: 15,
  },
  recentlyView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  viewAll: {
    marginTop: 20,
    marginRight: 15,
  },
  recentlyViewItemImage: {
    height: 50,
    width: 55,
  },
  recentViewItem: {
    marginTop: 10,
    marginHorizontal: 5,
    padding: 10,
    height: 120,
    borderWidth: 1,
    borderColor: "rgb(220,220,220)",
  },
  recentlyViewItemText: {
    paddingTop: 20,
  },
  brandViewStyleing: {
    backgroundColor: "rgb(253,245,230)",
  },
  brandTextStyle: {
    fontSize: 26,
    alignSelf: "center",
  },
  BigbrandTextStyle: {
    backgroundColor: 'rgb(0,0,0)',
    color: "white",
    alignSelf: "center",
    fontSize: 16,
    marginTop: 5,
    padding:3,
    
  },
  brandinsidView:{
    marginTop:18,
    height:130,
    width:115,
    backgroundColor:'white',
    borderWidth:1,
    marginHorizontal:8,
    alignItems:'baseline',
    paddingTop:5,
    borderColor:'rgb(220,220,220)',
    paddingBottom:5
  },
  brandImageStyle:{
    width:60,
    height:70,
    alignSelf:'center'
  },
  brandinsideText:{
    color:'white',
    fontSize:13,
    
  }
});
