import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PersonalProfilePage = () => {
  return (
    <View style={styles.personalProfilePage}>
      <View style={styles.myProfileParent}>
        <Text style={styles.myProfile}>{`My Profile `}</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.budget, styles.miTypo]}>Budget</Text>
        <Text style={[styles.text, styles.miTypo]}>$20-$40</Text>
        <Text style={[styles.name, styles.nameTypo]}>NAME</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Text style={[styles.location, styles.miTypo]}>Location</Text>
        <Text style={[styles.proximity, styles.indoorTypo]}>Proximity</Text>
        <View style={[styles.rectangleView, styles.frameLayout]} />
        <Text style={[styles.generalIntrests, styles.nameTypo]}>
          General Intrests
        </Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Text style={[styles.indoor, styles.indoorTypo]}>Indoor</Text>
        <Text style={[styles.mi, styles.miTypo]}>{`<5 mi`}</Text>
        <Text
          style={[styles.foodActiveNightlife, styles.nameTypo]}
        >{`Food, Active, Nightlife `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 52,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: 0,
    width: 352,
    position: "absolute",
  },
  miTypo: {
    height: 15,
    width: 126,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    position: "absolute",
  },
  indoorTypo: {
    left: 108,
    height: 15,
    width: 126,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    position: "absolute",
  },
  myProfile: {
    marginLeft: -161,
    top: 0,
    fontSize: FontSize.size_21xl,
    width: 323,
    height: 76,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  frameChild: {
    top: 351,
  },
  budget: {
    top: 320,
    left: 114,
    width: 126,
    color: Color.colorBlack,
  },
  text: {
    top: 362,
    color: Color.colorGray_300,
    left: 114,
    width: 126,
  },
  name: {
    marginLeft: -84,
    top: 249,
    width: 168,
    height: 35,
    color: Color.colorBlack,
    left: "50%",
  },
  frameItem: {
    top: 446,
  },
  frameInner: {
    top: 541,
  },
  location: {
    top: 416,
    left: 114,
    width: 126,
    color: Color.colorBlack,
  },
  proximity: {
    top: 511,
    color: Color.colorBlack,
  },
  rectangleView: {
    top: 636,
  },
  generalIntrests: {
    top: 606,
    left: 81,
    width: 178,
    height: 16,
    color: Color.colorBlack,
  },
  ellipseIcon: {
    marginLeft: -77,
    top: 76,
    width: 149,
    height: 149,
    left: "50%",
    position: "absolute",
  },
  indoor: {
    top: 457,
    color: Color.colorGray_300,
  },
  mi: {
    top: 552,
    left: 107,
    color: Color.colorGray_300,
  },
  foodActiveNightlife: {
    top: 648,
    left: 65,
    width: 212,
    height: 17,
    color: Color.colorGray_300,
  },
  myProfileParent: {
    top: 48,
    left: 19,
    height: 688,
    width: 352,
    position: "absolute",
  },
  personalProfilePage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default PersonalProfilePage;
