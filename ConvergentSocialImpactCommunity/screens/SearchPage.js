import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const SearchPage = () => {
  return (
    <View style={styles.searchPage}>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <View style={[styles.frameItem, styles.frameChildLayout3]} />
        <View style={[styles.frameInner, styles.frameChildLayout3]} />
        <View style={[styles.rectangleView, styles.frameChildLayout3]} />
        <View style={[styles.frameChild1, styles.frameChildLayout3]} />
        <View style={[styles.frameChild2, styles.frameChildLayout3]} />
        <View style={[styles.frameInner, styles.frameChildLayout3]} />
        <View style={[styles.rectangleView, styles.frameChildLayout3]} />
        <View style={[styles.frameChild1, styles.frameChildLayout3]} />
        <View style={[styles.frameChild2, styles.frameChildLayout3]} />
        <View style={[styles.frameChild7, styles.frameChildLayout2]} />
        <View style={[styles.frameChild8, styles.frameChildLayout2]} />
        <View style={[styles.frameChild9, styles.frameChildLayout2]} />
        <View style={[styles.frameChild10, styles.frameChildLayout2]} />
        <View style={[styles.frameChild11, styles.frameChildLayout2]} />
        <View style={[styles.frameChild8, styles.frameChildLayout2]} />
        <View style={[styles.frameChild9, styles.frameChildLayout2]} />
        <View style={[styles.frameChild10, styles.frameChildLayout2]} />
        <View style={[styles.frameChild11, styles.frameChildLayout2]} />
        <Text
          style={[styles.blantonMuseum, styles.searchTypo]}
        >{`Blanton Museum `}</Text>
        <View style={[styles.frameChild16, styles.frameChildLayout1]} />
        <Text style={[styles.text, styles.miTypo]}>$$</Text>
        <View style={[styles.frameChild17, styles.frameChildLayout1]} />
        <Text style={[styles.outdoor, styles.miTypo]}>Outdoor</Text>
        <Text style={[styles.x, styles.xTypo]}>x</Text>
        <View style={[styles.frameChild18, styles.frameChildLayout]} />
        <Text style={[styles.mi, styles.miTypo]}>{`<5 mi`}</Text>
        <Text style={[styles.x1, styles.xTypo]}>x</Text>
        <View style={[styles.frameChild19, styles.frameChildLayout]} />
        <Text style={[styles.active, styles.miTypo]}>Active</Text>
        <Text style={[styles.x2, styles.xTypo]}>x</Text>
        <View style={[styles.frameChild20, styles.frameChildLayout1]} />
        <Text style={[styles.x3, styles.xTypo]}>x</Text>
        <Text style={[styles.search, styles.searchTypo]}>{`SEARCH `}</Text>
        <Text style={[styles.pizzaPress, styles.searchTypo]}>Pizza Press</Text>
        <Text style={styles.kayakingLady}>Kayaking - Lady Bird Lake</Text>
        <Text style={[styles.utCampusWalk, styles.utCampusWalkTypo]}>
          UT Campus Walk
        </Text>
        <Text style={[styles.amysIceCream, styles.utCampusWalkTypo]}>
          Amy’s Ice cream
        </Text>
        <Image
          style={[styles.starIcon, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon2, styles.starIconPosition2]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon3, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon4, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon2, styles.starIconPosition2]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon3, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon4, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon9, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon10, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon11, styles.starIconPosition2]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon12, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon13, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon10, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon11, styles.starIconPosition2]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon12, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon13, styles.starIconLayout]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon18, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon19, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon20, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon21, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon19, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon20, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon21, styles.starIconPosition1]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon25, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon26, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon27, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon26, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Image
          style={[styles.starIcon27, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star.png")}
        />
        <Text style={[styles.nightLife, styles.miTypo]}>Night Life</Text>
        <Text style={[styles.x4, styles.xTypo]}>x</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout3: {
    height: 168,
    width: 328,
    left: 35,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameChildLayout2: {
    height: 114,
    backgroundColor: Color.colorWhitesmoke,
    width: 328,
    left: 35,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  searchTypo: {
    height: 22,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 28,
    top: 74,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  miTypo: {
    top: 77,
    height: 22,
    width: 116,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  xTypo: {
    height: 19,
    width: 26,
    color: Color.colorGray_200,
    top: 77,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  frameChildLayout: {
    width: 76,
    height: 28,
    top: 74,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  utCampusWalkTypo: {
    height: 27,
    width: 138,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  starIconLayout: {
    height: 20,
    width: 17,
    position: "absolute",
  },
  starIconPosition2: {
    top: 660,
    height: 20,
    width: 17,
    position: "absolute",
  },
  starIconPosition1: {
    left: 84,
    height: 20,
    width: 17,
    position: "absolute",
  },
  starIconPosition: {
    left: 101,
    height: 20,
    width: 17,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    left: 26,
    width: 339,
    height: 67,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameItem: {
    top: 132,
  },
  frameInner: {
    top: 322,
  },
  rectangleView: {
    top: 524,
  },
  frameChild1: {
    top: 726,
  },
  frameChild2: {
    top: 928,
  },
  frameChild7: {
    top: 132,
  },
  frameChild8: {
    top: 322,
  },
  frameChild9: {
    top: 524,
  },
  frameChild10: {
    top: 726,
  },
  frameChild11: {
    top: 928,
  },
  blantonMuseum: {
    top: 250,
    width: 116,
    height: 22,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    left: 50,
  },
  frameChild16: {
    left: 28,
    width: 74,
  },
  text: {
    left: 0,
  },
  frameChild17: {
    left: 104,
    width: 88,
  },
  outdoor: {
    left: 83,
  },
  x: {
    left: 67,
  },
  frameChild18: {
    left: 194,
  },
  mi: {
    left: 166,
  },
  x1: {
    left: 241,
  },
  frameChild19: {
    left: 274,
  },
  active: {
    left: 246,
  },
  x2: {
    left: 322,
  },
  frameChild20: {
    left: 355,
    width: 98,
  },
  x3: {
    left: 163,
  },
  search: {
    top: 22,
    fontSize: FontSize.size_xl,
    color: "rgba(0, 0, 0, 0.46)",
    width: 116,
    height: 22,
    left: 35,
  },
  pizzaPress: {
    top: 440,
    left: 47,
    width: 80,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
  },
  kayakingLady: {
    top: 643,
    left: 44,
    width: 176,
    height: 17,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  utCampusWalk: {
    top: 845,
    left: 38,
  },
  amysIceCream: {
    top: 1047,
    left: 36,
  },
  starIcon: {
    top: 268,
    left: 50,
  },
  starIcon1: {
    top: 458,
    left: 50,
  },
  starIcon2: {
    left: 50,
  },
  starIcon3: {
    top: 862,
    left: 50,
  },
  starIcon4: {
    top: 1064,
    left: 50,
  },
  starIcon9: {
    top: 268,
    left: 67,
  },
  starIcon10: {
    top: 458,
    left: 67,
  },
  starIcon11: {
    left: 67,
  },
  starIcon12: {
    top: 862,
    left: 67,
  },
  starIcon13: {
    top: 1064,
    left: 67,
  },
  starIcon18: {
    top: 268,
  },
  starIcon19: {
    top: 458,
  },
  starIcon20: {
    top: 862,
  },
  starIcon21: {
    top: 1064,
  },
  starIcon25: {
    top: 268,
  },
  starIcon26: {
    top: 862,
  },
  starIcon27: {
    top: 1064,
  },
  nightLife: {
    left: 340,
  },
  x4: {
    left: 426,
  },
  rectangleParent: {
    top: 55,
    left: -1,
    width: 456,
    height: 1096,
    position: "absolute",
  },
  searchPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default SearchPage;
