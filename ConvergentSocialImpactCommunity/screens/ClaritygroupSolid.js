import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const ClaritygroupSolid = () => {
  return (
    <View style={styles.claritygroupSolid}>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    height: "22.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    width: "26.67%",
    right: "60.83%",
    left: "12.5%",
    bottom: "24.44%",
    top: "44.72%",
    height: "30.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    width: "26.94%",
    right: "12.5%",
    left: "60.56%",
    bottom: "24.44%",
    top: "44.72%",
    height: "30.83%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    width: "20.83%",
    top: "16.94%",
    right: "59.72%",
    bottom: "60.28%",
    left: "19.44%",
  },
  vectorIcon3: {
    width: "21.11%",
    top: "16.67%",
    right: "19.17%",
    bottom: "60.56%",
    left: "59.72%",
  },
  vectorIcon4: {
    height: "24.72%",
    width: "24.72%",
    top: "25%",
    right: "38.06%",
    bottom: "50.28%",
    left: "37.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon5: {
    height: "30.28%",
    width: "40.83%",
    top: "56.39%",
    right: "29.17%",
    bottom: "13.33%",
    left: "30%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon6: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    width: "100%",
  },
  claritygroupSolid: {
    flex: 1,
    height: 36,
    overflow: "hidden",
    width: "100%",
  },
});

export default ClaritygroupSolid;
