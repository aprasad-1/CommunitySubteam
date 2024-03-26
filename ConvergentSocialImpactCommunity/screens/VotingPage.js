import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const VotingPage = () => {
  return (
    <View style={styles.votingPage}>
      <View style={[styles.votingPageChild, styles.childBg]} />
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <View style={[styles.frameItem, styles.framePosition]} />
        <View style={styles.frameInner} />
        <View style={[styles.rectangleView, styles.frameChildLayout1]} />
        <View style={[styles.frameChild1, styles.frameChildLayout1]} />
        <View style={[styles.frameChild2, styles.frameChildLayout1]} />
        <Text style={[styles.text, styles.miTypo]}>$$</Text>
        <Text style={styles.indoor}>Indoor</Text>
        <Text style={[styles.mi, styles.miTypo]}>{`<5 mi`}</Text>
        <Text style={[styles.description, styles.descriptionLayout]}>
          Description
        </Text>
        <Text style={[styles.asThePrimary, styles.descriptionLayout]}>
          As the primary art collection for the city of Austin, the Blanton
          Museum of Art is a major resource for the community. With more than
          21,000 works in the collection, the Blanton showcases art from across
          the ages, from ancient Greek pottery to abstract expressionism. With a
          year-round schedule of traveling exhibitions, art lovers are sure to
          discover new and old favorites at the Blanton.
        </Text>
        <Image
          style={[styles.starIcon, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon1, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star2.png")}
        />
        <Image
          style={[styles.starIcon2, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star3.png")}
        />
        <Image
          style={[styles.starIcon3, styles.starIconPosition]}
          contentFit="cover"
          source={require("../assets/star2.png")}
        />
        <View style={[styles.frameChild3, styles.childBg]} />
        <Text style={styles.blantonMuseum}>Blanton Museum</Text>
        <Image
          style={[styles.ellipseIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={[styles.frameChild4, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild5, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild6, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild7, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild8, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.frameChild9, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Image
          style={[styles.claritygroupSolidIcon, styles.solidIconPosition]}
          contentFit="cover"
          source={require("../assets/claritygroupsolid1.png")}
        />
        <Image
          style={[styles.iconamoonprofileFill, styles.solidIconPosition]}
          contentFit="cover"
          source={require("../assets/iconamoonprofilefill.png")}
        />
      </View>
      <Image
        style={[styles.flowbitesearchSolidIcon, styles.solidIconPosition]}
        contentFit="cover"
        source={require("../assets/flowbitesearchsolid.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childBg: {
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  framePosition: {
    height: 604,
    width: 59,
    marginTop: -313,
    left: "50%",
    top: "50%",
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  frameChildLayout1: {
    height: 17,
    width: 34,
    top: 352,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  miTypo: {
    width: 65,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_3xs,
    top: 354,
    height: 17,
    position: "absolute",
  },
  descriptionLayout: {
    height: 53,
    width: 266,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  starIconPosition: {
    height: 32,
    top: 345,
    position: "absolute",
  },
  frameChildLayout: {
    height: 8,
    width: 8,
    top: 312,
    position: "absolute",
  },
  solidIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  votingPageChild: {
    top: 746,
    left: 30,
    width: 329,
    height: 48,
  },
  frameChild: {
    marginLeft: 122.5,
  },
  frameItem: {
    marginLeft: -181.5,
  },
  frameInner: {
    marginTop: -326,
    marginLeft: -151.5,
    backgroundColor: Color.colorWhitesmoke,
    width: 304,
    height: 640,
    left: "50%",
    top: "50%",
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  rectangleView: {
    left: 195,
  },
  frameChild1: {
    left: 272,
  },
  frameChild2: {
    left: 234,
  },
  text: {
    left: 179,
  },
  indoor: {
    left: 218,
    width: 66,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_3xs,
    top: 354,
    height: 17,
    position: "absolute",
  },
  mi: {
    left: 257,
  },
  description: {
    marginLeft: -140.5,
    top: 396,
    fontSize: FontSize.size_11xl,
  },
  asThePrimary: {
    marginLeft: -135.5,
    top: 442,
    fontSize: FontSize.size_mini,
  },
  starIcon: {
    left: 49,
    width: 27,
    height: 32,
    top: 345,
  },
  starIcon1: {
    left: 76,
    width: 27,
    height: 32,
    top: 345,
  },
  starIcon2: {
    left: 103,
    width: 26,
    height: 32,
    top: 345,
  },
  starIcon3: {
    left: 129,
    width: 27,
    height: 32,
    top: 345,
  },
  frameChild3: {
    top: 167,
    left: 39,
    width: 285,
    height: 169,
  },
  blantonMuseum: {
    marginLeft: -132.5,
    top: 56,
    fontSize: FontSize.size_21xl,
    height: 121,
    width: 266,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  ellipseIcon: {
    left: 133,
  },
  frameChild4: {
    left: 148,
  },
  frameChild5: {
    left: 163,
  },
  frameChild6: {
    left: 178,
  },
  frameChild7: {
    left: 193,
  },
  frameChild8: {
    left: 208,
  },
  frameChild9: {
    left: 223,
  },
  claritygroupSolidIcon: {
    marginLeft: -17.5,
    width: 36,
    height: 36,
    top: 728,
    overflow: "hidden",
    left: "50%",
  },
  iconamoonprofileFill: {
    left: 61,
    width: 33,
    height: 33,
    top: 728,
    overflow: "hidden",
  },
  rectangleParent: {
    top: 24,
    left: 13,
    width: 363,
    height: 738,
    position: "absolute",
  },
  flowbitesearchSolidIcon: {
    height: "3.67%",
    width: "7.95%",
    top: "89.34%",
    right: "18.46%",
    bottom: "6.99%",
    left: "73.59%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  votingPage: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
  },
});

export default VotingPage;
