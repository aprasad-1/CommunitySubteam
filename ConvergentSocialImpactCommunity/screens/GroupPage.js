import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const GroupPage = () => {
  return (
    <View style={styles.groupPage}>
      <Text style={styles.nameOfGroup}>Name of Group</Text>
      <Text style={styles.results}>Results</Text>
      <Text style={[styles.clickOnThe, styles.clickOnTheTypo]}>
        Click on the activity to learn more
      </Text>
      <Image
        style={styles.groupPageChild}
        contentFit="cover"
        source={require("../assets/ellipse-12.png")}
      />
      <Image
        style={[styles.groupPageItem, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.groupPageInner, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.groupPageChild1, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.groupPageChild2, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/ellipse-13.png")}
      />
      <Text
        style={[styles.blantonMuseumPizza, styles.clickOnTheTypo]}
      >{`Blanton Museum 
Pizza Press
Amy’s Ice-Cream 
Barton Springs 
The Roosevelt Room
Wine Tasting 
Boxing Class (suggested by John) 
Cake Making Class (suggested by Julie) `}</Text>
      <View style={[styles.rectangleView, styles.groupChildLayout]} />
      <View style={[styles.groupPageChild3, styles.groupChildLayout]} />
      <View style={[styles.groupPageChild4, styles.groupChildLayout]} />
      <View style={[styles.groupPageChild5, styles.groupChildLayout]} />
      <Text style={[styles.food, styles.foodTypo]}>Food</Text>
      <Text style={[styles.active, styles.foodTypo]}>Active</Text>
      <Text style={[styles.text, styles.foodTypo]}>$$</Text>
      <Text style={[styles.indoor, styles.foodTypo]}>Indoor</Text>
      <View style={styles.groupPageChild6} />
      <Image
        style={[
          styles.iconamoonprofileFill,
          styles.iconamoonprofileFillPosition,
        ]}
        contentFit="cover"
        source={require("../assets/iconamoonprofilefill.png")}
      />
      <Image
        style={[
          styles.claritygroupSolidIcon,
          styles.iconamoonprofileFillPosition,
        ]}
        contentFit="cover"
        source={require("../assets/claritygroupsolid.png")}
      />
      <Image
        style={styles.flowbitesearchSolidIcon}
        contentFit="cover"
        source={require("../assets/flowbitesearchsolid.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  clickOnTheTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout1: {
    height: 43,
    width: 43,
    top: 210,
    position: "absolute",
  },
  groupChildLayout: {
    height: 28,
    width: 74,
    top: 286,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  foodTypo: {
    height: 22,
    width: 116,
    top: 289,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    position: "absolute",
  },
  iconamoonprofileFillPosition: {
    top: 751,
    position: "absolute",
    overflow: "hidden",
  },
  nameOfGroup: {
    marginLeft: -172,
    top: 32,
    width: 142,
    height: 53,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_21xl,
    left: "50%",
    position: "absolute",
  },
  results: {
    marginLeft: -275,
    top: 348,
    height: 55,
    width: 359,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_21xl,
    left: "50%",
    position: "absolute",
  },
  clickOnThe: {
    marginLeft: -159,
    top: 396,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    height: 55,
    width: 359,
  },
  groupPageChild: {
    top: 28,
    left: 205,
    width: 144,
    height: 144,
    position: "absolute",
  },
  groupPageItem: {
    left: 57,
  },
  groupPageInner: {
    left: 115,
  },
  ellipseIcon: {
    left: 173,
  },
  groupPageChild1: {
    left: 231,
  },
  groupPageChild2: {
    left: 289,
  },
  blantonMuseumPizza: {
    marginLeft: -163,
    top: 448,
    fontSize: FontSize.size_xl,
    width: 337,
  },
  rectangleView: {
    left: 40,
  },
  groupPageChild3: {
    left: 204,
  },
  groupPageChild4: {
    left: 287,
  },
  groupPageChild5: {
    left: 122,
  },
  food: {
    left: 183,
  },
  active: {
    left: 266,
  },
  text: {
    left: 19,
  },
  indoor: {
    left: 100,
  },
  groupPageChild6: {
    top: 745,
    left: 30,
    width: 329,
    height: 48,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  iconamoonprofileFill: {
    left: 77,
    width: 33,
    height: 33,
  },
  claritygroupSolidIcon: {
    marginLeft: -15,
    width: 36,
    height: 36,
    left: "50%",
    top: 751,
  },
  flowbitesearchSolidIcon: {
    height: "3.67%",
    width: "7.95%",
    top: "89.22%",
    right: "17.69%",
    bottom: "7.11%",
    left: "74.36%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GroupPage;
