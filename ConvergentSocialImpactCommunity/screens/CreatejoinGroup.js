import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CreatejoinGroup = () => {
  return (
    <View style={styles.createjoinGroup}>
      <View style={styles.createAGroupParent}>
        <Text style={[styles.createAGroup, styles.groupTypo]}>
          Create a Group
        </Text>
        <Text style={[styles.joinAGroup, styles.groupTypo]}>Join a Group</Text>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Text style={[styles.shareYourLink, styles.enterCodeTypo]}>
          Share your link
        </Text>
        <Text style={styles.or}>OR</Text>
        <View style={[styles.frameItem, styles.frameLayout]} />
        <Text
          style={[styles.enterCode, styles.enterCodeTypo]}
        >{`Enter Code: `}</Text>
      </View>
      <Text style={[styles.yourGroups, styles.groupTypo]}>Your Groups</Text>
      <View
        style={[styles.createjoinGroupChild, styles.createjoinGroupLayout1]}
      />
      <View
        style={[styles.createjoinGroupItem, styles.createjoinGroupLayout1]}
      />
      <View
        style={[styles.createjoinGroupInner, styles.createjoinGroupLayout1]}
      />
      <Image
        style={styles.linkIcon}
        contentFit="cover"
        source={require("../assets/link.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.createjoinGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.createjoinGroupChild1, styles.createjoinGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.createjoinGroupChild2, styles.createjoinGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.nameOfGroup, styles.nameGroupTypo]}>
        name of group
      </Text>
      <Text style={[styles.nameOfGroup1, styles.nameGroupTypo]}>
        name of group
      </Text>
      <Text style={[styles.nameOfGroup2, styles.nameGroupTypo]}>
        name of group
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupTypo: {
    height: 76,
    width: 323,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_21xl,
    left: "50%",
    position: "absolute",
  },
  frameLayout: {
    height: 67,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: 0,
    width: 353,
    position: "absolute",
  },
  enterCodeTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_11xl,
    height: 76,
    width: 323,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    marginLeft: -161.5,
    position: "absolute",
  },
  createjoinGroupLayout1: {
    height: 56,
    width: 361,
    backgroundColor: Color.colorGainsboro,
    borderRadius: Border.br_xl,
    left: 18,
    position: "absolute",
  },
  createjoinGroupLayout: {
    height: 33,
    width: 33,
    left: 38,
    position: "absolute",
  },
  nameGroupTypo: {
    fontSize: FontSize.size_6xl,
    marginLeft: -162,
    color: Color.colorGray_300,
    height: 76,
    width: 323,
    textAlign: "center",
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    position: "absolute",
  },
  createAGroup: {
    top: 10,
    marginLeft: -161.5,
    width: 323,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_21xl,
    left: "50%",
  },
  joinAGroup: {
    top: 208,
    marginLeft: -161.5,
    width: 323,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    fontSize: FontSize.size_21xl,
    left: "50%",
  },
  frameChild: {
    top: 76,
  },
  shareYourLink: {
    top: 86,
  },
  or: {
    top: 162,
    fontSize: FontSize.size_11xl,
    height: 76,
    width: 323,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.livvicRegular,
    left: "50%",
    marginLeft: -161.5,
    position: "absolute",
  },
  frameItem: {
    top: 274,
  },
  enterCode: {
    top: 284,
  },
  createAGroupParent: {
    top: 50,
    height: 372,
    width: 353,
    left: 18,
    position: "absolute",
  },
  yourGroups: {
    marginLeft: -165,
    top: 451,
  },
  createjoinGroupChild: {
    top: 527,
  },
  createjoinGroupItem: {
    top: 600,
  },
  createjoinGroupInner: {
    top: 673,
  },
  linkIcon: {
    top: 134,
    left: 49,
    width: 43,
    height: 49,
    position: "absolute",
  },
  ellipseIcon: {
    top: 539,
  },
  createjoinGroupChild1: {
    top: 612,
  },
  createjoinGroupChild2: {
    top: 685,
  },
  nameOfGroup: {
    top: 534,
  },
  nameOfGroup1: {
    top: 607,
  },
  nameOfGroup2: {
    top: 680,
  },
  createjoinGroup: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default CreatejoinGroup;
