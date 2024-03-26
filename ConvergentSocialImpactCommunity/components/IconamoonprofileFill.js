import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IconamoonprofileFill = () => {
  return (
    <View style={styles.iconamoonprofileFill}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "75.15%",
    width: "75.15%",
    top: "12.42%",
    right: "12.42%",
    bottom: "12.42%",
    left: "12.42%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  iconamoonprofileFill: {
    width: 33,
    height: 33,
    overflow: "hidden",
  },
});

export default IconamoonprofileFill;
